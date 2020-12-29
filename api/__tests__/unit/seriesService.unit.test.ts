'use strict';

import SeriesModel from '../../series/model';
import SeriesService from "../../series/service";
import {ContextWithLoggerDb} from "../../types";
import {mocked} from "ts-jest/utils";

jest.mock('../../series/model');

const mockContext = {
    dbTransactionManager: jest.fn()
} as unknown as ContextWithLoggerDb;

describe('Series Service', () => {

    it('should list series', async () => {
        const mockData = {
            name: 'title'
        } as SeriesModel;

        mocked(SeriesModel.find).mockReturnValueOnce(Promise.resolve([mockData]));

        await SeriesService.listSeries(mockContext);

        expect(mockContext).toHaveProperty('body');
        expect(mockContext.body).toMatchObject({
            series: [mockData]
        });
    });
});
