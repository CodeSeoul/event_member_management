'use strict';

import { Connection, createConnection, QueryBuilder } from 'typeorm';
import { SuperTest, Test } from 'supertest';
import supertest from 'supertest';
import { createServer } from 'http';

import app from '../../app';
import DatabaseConfig from '../../database/config';
import SeriesModel from '../../series/model';
import EventModel from '../../event/model';
import MemberModel from "../../member/model";

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

describe('Member Service', () => {
  describe('Requires existing members', () => {
    let seriesId;
    let eventIds;
    let memberIds;

    beforeEach(async () => {
      const seriesInsertResult = await queryBuilder
          .insert()
          .into(SeriesModel)
          .values([{name: 'test series'}])
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

      const memberInsertResult = await queryBuilder
          .insert()
          .into(MemberModel)
          .values([{
            firstName: 'first',
            lastName: 'last',
            imageUrl: 'https://imgs.search.brave.com/r028CkrfXfh3mlaMTgjvg-GARG78UziKKZGdRm-rV_c/rs:fit:1200:1200:1/g:ce/aHR0cDovL2NsaXBh/cnRtYWcuY29tL2lt/YWdlcy9oZWFkc2hv/dC1zaWxob3VldHRl/LWNsaXBhcnQtMjYu/cG5n',
            shortBio: 'I am a person',
            events: eventIds,
          }])
          .execute();

      memberIds = memberInsertResult.identifiers.map((record) => record.id);
    });

    afterEach(async () => {
      await queryBuilder.delete().from('member').whereInIds(memberIds).execute();

      await queryBuilder.delete().from('event').whereInIds(eventIds).execute();

      await queryBuilder
          .delete()
          .from('series')
          .whereInIds([seriesId])
          .execute();
    });

    it('should list members', async () => {
      const response = await request.get('/member').expect(200);

      expect(response.body).toHaveProperty('members');
      // We have three events from seed data
      // We may want to remove these later...?
      expect(response.body.members.length).toBeGreaterThanOrEqual(1);

      expect(response.body.members).toEqual(
          expect.arrayContaining([
                expect.objectContaining({
                  firstName: 'first',
                  lastName: 'last',
                  imageUrl: 'https://imgs.search.brave.com/r028CkrfXfh3mlaMTgjvg-GARG78UziKKZGdRm-rV_c/rs:fit:1200:1200:1/g:ce/aHR0cDovL2NsaXBh/cnRtYWcuY29tL2lt/YWdlcy9oZWFkc2hv/dC1zaWxob3VldHRl/LWNsaXBhcnQtMjYu/cG5n',
                  shortBio: 'I am a person',
                }),
              ]
          )
      );
    });
  });
});
