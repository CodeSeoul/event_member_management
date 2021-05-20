'use strict';

import EventModel from '../../event/model';
import EventService from '../../event/service';
import { ContextWithLoggerDb } from '../../types';
import { mocked } from 'ts-jest/utils';

jest.mock('../../event/model');

const mockContext = ({
  dbTransactionManager: jest.fn(),
} as unknown) as ContextWithLoggerDb;

// Thanks to https://stackoverflow.com/a/61648442/795407
describe('Event Service', () => {
  it('should list events', async () => {
    const mockEventData = {
      id: 1,
      title: 'title',
      startTimestamp: new Date(),
      durationMinutes: 120,
      imageUrl: 'https://codeseoul.org/images/logo-color-square-512(1).jpg',
      description: 'This is an event',
    };

    const mockEventModel = {
      ...mockEventData,
      createdAt: new Date(),
      updatedAt: new Date(),
      toJSON: jest.fn(),
    } as EventModel;

    mocked(mockEventModel.toJSON).mockReturnValue(mockEventData);

    mocked(EventModel.find).mockReturnValueOnce(
      Promise.resolve([mockEventModel])
    );

    await EventService.listEvents(mockContext);

    expect(mockContext).toHaveProperty('body');
    expect(mockContext.body).toMatchObject({
      events: [mockEventData],
    });
  });
});
