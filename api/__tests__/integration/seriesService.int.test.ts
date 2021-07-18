'use strict';

import { Connection, createConnection, QueryBuilder } from 'typeorm';
import supertest, { SuperTest, Test } from 'supertest';
import { createServer } from 'http';

import app from '../../app';
import DatabaseConfig from '../../database/config';
import SeriesModel from '../../series/model';
import { SeriesListSchema } from '../../series/definition';

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
describe('Series Service', () => {
  describe('Requires existing series', () => {
    let seriesId: number;

    beforeEach(async () => {
      const seriesInsertResult = await queryBuilder
        .insert()
        .into(SeriesModel)
        .values([{ name: 'test series' }])
        .execute();

      seriesId = (seriesInsertResult.identifiers[0] as SeriesModel).id;
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
      const responseBody = response.body as SeriesListSchema;
      expect(responseBody.series.length).toBeGreaterThanOrEqual(1);

      expect(responseBody.series).toEqual(
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
