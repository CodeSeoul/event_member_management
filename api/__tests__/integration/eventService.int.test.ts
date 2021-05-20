'use strict';

import { Connection, createConnection, QueryBuilder } from 'typeorm';
import supertest, { SuperTest, Test } from 'supertest';
import { createServer } from 'http';

import app from '../../app';
import DatabaseConfig from '../../database/config';
import SeriesModel from '../../series/model';
import EventModel from '../../event/model';

let request: SuperTest<Test>;
let dbConnection: Connection;
let queryBuilder: QueryBuilder<any>;

beforeAll(async () => {
  request = supertest(createServer(app.callback()));
  dbConnection = await createConnection(DatabaseConfig);
  queryBuilder = await dbConnection.createQueryBuilder();
});

afterAll(async () => {
  await dbConnection.close();
});

// Thanks to https://stackoverflow.com/a/61648442/795407
describe('Event Service', () => {
  describe('Requires existing events', () => {
    let seriesId;
    let eventIds;

    beforeEach(async () => {
      const seriesInsertResult = await queryBuilder
        .insert()
        .into(SeriesModel)
        .values([{ name: 'test series' }])
        .execute();

      seriesId = seriesInsertResult.identifiers[0].id;

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

      eventIds = eventInsertResult.identifiers.map((record) => record.id);
    });

    afterEach(async () => {
      await queryBuilder.delete().from('event').whereInIds(eventIds).execute();

      await queryBuilder
        .delete()
        .from('series')
        .whereInIds([seriesId])
        .execute();
    });

    it('should list events', async () => {
      const response = await request.get('/event').expect(200);

      expect(response.body).toHaveProperty('events');
      // We have three events from seed data
      // We may want to remove these later...?
      expect(response.body.events.length).toBeGreaterThanOrEqual(2);

      expect(response.body.events).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            title: 'test event 1',
            series: expect.objectContaining({
              id: seriesId,
              name: 'test series',
            }),
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
