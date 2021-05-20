'use strict';

import SeriesModel from '../../series/model';
import SeriesService from '../../series/service';
import { ContextWithLoggerDb } from '../../types';
import { mocked } from 'ts-jest/utils';

jest.mock('../../series/model');

const mockContext = ({
  dbTransactionManager: jest.fn(),
} as unknown) as ContextWithLoggerDb;

describe('Series Service', () => {
  it('should list series', async () => {
    const mockData = {
      id: 1,
      name: 'title',
    };

    const mockSeriesModel = {
      ...mockData,
      createdAt: new Date(),
      updatedAt: new Date(),
      toJSON: jest.fn(),
    } as SeriesModel;

    mocked(mockSeriesModel.toJSON).mockReturnValue(mockData);

    mocked(SeriesModel.find).mockReturnValueOnce(
      Promise.resolve([mockSeriesModel])
    );

    await SeriesService.listSeries(mockContext);

    expect(mockContext).toHaveProperty('body');
    expect(mockContext.body).toMatchObject({
      series: [mockData],
    });
  });
});
