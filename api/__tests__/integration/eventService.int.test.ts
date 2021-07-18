'use strict';

import { Connection, createConnection, QueryBuilder } from 'typeorm';
import supertest from 'supertest';
import { SuperTest, Test } from 'supertest';
import { createServer } from 'http';

import app from '../../app';
import DatabaseConfig from '../../database/config';
import SeriesModel from '../../series/model';
import EventModel from '../../event/model';
import { EventListSchema } from '../../event/definition';
import { SeriesWithIdSchema } from '../../series/definition';

let request: SuperTest<Test>;
let dbConnection: Connection;
let queryBuilder: QueryBuilder<any>;

beforeAll(async () => {
  request = supertest(createServer(app.callback()));
  dbConnection = await createConnection(DatabaseConfig);
  queryBuilder = dbConnection.createQueryBuilder();
});

afterAll(async () => {
  await dbConnection.close();
});

// Thanks to https://stackoverflow.com/a/61648442/795407
describe('Event Service', () => {
  describe('Requires cleaning up an event', () => {
    let seriesId: number;
    let eventIds: number[] = [];

    beforeEach(async () => {
      const seriesInsertResult = await queryBuilder
        .insert()
        .into(SeriesModel)
        .values([{ name: 'test series' }])
        .execute();

      seriesId = (seriesInsertResult.identifiers[0] as SeriesModel).id;
    })

    afterEach(async () => {
      await queryBuilder.delete().from('event').whereInIds(eventIds).execute();

      await queryBuilder
        .delete()
        .from('series')
        .whereInIds([seriesId])
        .execute();
    });

    it('should create events', async () => {
      const testEventData = {
        title: 'create test',
        seriesId,
        description: 'this is only a test',
      };
      const response = await request.post('/event').send(testEventData).expect(200);

      expect(response.body).toHaveProperty('id');
      const responseBody = response.body as EventModel;
      // Make sure to track the ID for cleanup in afterEach
      eventIds.push(responseBody.id);

      expect(responseBody).toEqual({
        id: responseBody.id,
        title: testEventData.title,
        series: {
          id: seriesId,
          name: 'test series',
        },
        description: testEventData.description,
      });
    });

    describe('Requires existing events', () => {

      beforeEach(async () => {
        const eventInsertResult = await queryBuilder
          .insert()
          .into(EventModel)
          .values([
            {
              title: 'test event 1',
              seriesId,
              description: 'this is only a test',
            },
            {
              title: 'test event 2',
              description: 'this is only a test without a series',
            },
          ])
          .execute();

        eventIds = eventIds.concat(eventInsertResult.identifiers.map((record: EventModel) => record.id));
      });

      it('should list events', async () => {
        const response = await request.get('/event').expect(200);

        expect(response.body).toHaveProperty('events');
        const responseBody = response.body as EventListSchema;
        // We have three events from seed data
        // We may want to remove these later...?
        expect(responseBody.events.length).toBeGreaterThanOrEqual(2);

        expect(responseBody.events).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              title: 'test event 1',
              series: expect.objectContaining({
                id: seriesId,
                name: 'test series',
              }) as SeriesWithIdSchema,
              description: 'this is only a test',
            }),
            expect.objectContaining({
              title: 'test event 2',
              description: 'this is only a test without a series',
            }),
          ])
        );
      });
    });
  });
});
