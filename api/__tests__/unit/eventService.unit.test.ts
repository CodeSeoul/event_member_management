'use strict';

import EventModel from '../../event/model';
import EventService from '../../event/service';
import { ContextStandard } from '../../types';
import { mocked } from 'ts-jest/utils';
import { EventWithIdSchema } from '../../event/definition';
import { MockedObjectDeep } from 'ts-jest/dist/utils/testing';
import { createMockContext } from '@shopify/jest-koa-mocks';
import { ContextCustomProperties } from './util';

jest.mock('../../event/model');

// Thanks to https://stackoverflow.com/a/61648442/795407
describe('Event Service', () => {
  let mockContextCustomProperties: ContextCustomProperties;
  let mockEventData: EventWithIdSchema;
  let eventModel: EventModel;
  let mockedEventModel: MockedObjectDeep<EventModel>;

  beforeEach(() => {
    mockEventData = {
      id: 1,
      title: 'title',
      startTimestamp: new Date(),
      durationMinutes: 120,
      imageUrl: 'https://codeseoul.org/images/logo-color-square-512(1).jpg',
      description: 'This is an event',
      members: [],
    };

    mockContextCustomProperties = {
      dbTransactionManager: {
        create: jest.fn(),
      },
      log: null,
    };
    eventModel = new EventModel(mockEventData);
    mockedEventModel = mocked(eventModel, true);
  })

  it('should list events', async () => {
    mockedEventModel.toJSON.mockReturnValue(Promise.resolve(mockEventData));

    mocked(EventModel.find).mockReturnValueOnce(
      Promise.resolve([eventModel])
    );
    const mockContext = createMockContext({
      customProperties: mockContextCustomProperties,
    });

    await EventService.listEvents(mockContext as ContextStandard);

    expect(mockContext).toHaveProperty('body');
    expect(mockContext.body).toMatchObject({
      events: [mockEventData],
    });
  });

  it('should create events', async () => {
    const mockContext = createMockContext({
      customProperties: mockContextCustomProperties,
      requestBody: mockEventData
    }) as ContextStandard;

    mockContextCustomProperties.dbTransactionManager.create.mockReturnValueOnce(eventModel);
    mockedEventModel.save.mockReturnValueOnce(Promise.resolve(eventModel));
    mockedEventModel.toJSON.mockReturnValueOnce(Promise.resolve(mockEventData));

    await EventService.createEvent(mockContext);

    expect(mockContext).toHaveProperty('body');
    expect(mockContext.body).toMatchObject(mockEventData);
  });
});
