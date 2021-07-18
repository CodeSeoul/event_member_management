'use strict';

import SeriesModel from '../../series/model';
import SeriesService from '../../series/service';
import { ContextStandard } from '../../types';
import { mocked } from 'ts-jest/utils';

jest.mock('../../series/model');

const rawMockContext = {
  dbTransactionManager: jest.fn(),
};
const mockContext = (rawMockContext as unknown) as ContextStandard;

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
      toJSON: jest.fn().mockReturnValue(mockData),
    } as SeriesModel;

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
