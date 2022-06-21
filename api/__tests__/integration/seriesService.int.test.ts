'use strict';

import { Connection, createConnection, QueryBuilder } from 'typeorm';
import { SuperTest, Test } from 'supertest';
import supertest from 'supertest';
import { createServer } from 'http';

import app from '../../app';
import DatabaseConfig from '../../database/config';
import SeriesModel from '../../series/model';

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
describe('Series Service', () => {
  describe('Requires existing series', () => {
    let seriesId;

    beforeEach(async () => {
      const seriesInsertResult = await queryBuilder
        .insert()
        .into(SeriesModel)
        .values([{ name: 'test series' }])
        .execute();

      seriesId = seriesInsertResult.identifiers[0].id;
    });

    afterEach(async () => {
      await queryBuilder
        .delete()
        .from('series')
        .whereInIds([seriesId])
        .execute();
    });

    it('should list series', async () => {
      const response = await request.get('/series').expect(200);

      expect(response.body).toHaveProperty('series');
      expect(response.body.series.length).toBeGreaterThanOrEqual(1);

      expect(response.body.series).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: seriesId,
            name: 'test series',
          }),
        ])
      );
    });
  });
});
