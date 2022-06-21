'use strict';

import MemberModel from '../../member/model';
import MemberService from '../../member/service';
import { ContextWithLoggerDb } from '../../types';
import { mocked } from 'ts-jest/utils';

jest.mock('../../member/model');

const mockContext = ({
  dbTransactionManager: jest.fn(),
} as unknown) as ContextWithLoggerDb;

// Thanks to https://stackoverflow.com/a/61648442/795407
describe('Member Service', () => {
  it('should list members', async () => {
    const mockMemberData = {
      id: 1,
      firstName: 'first',
      lastName: 'last',
      imageUrl: 'https://imgs.search.brave.com/r028CkrfXfh3mlaMTgjvg-GARG78UziKKZGdRm-rV_c/rs:fit:1200:1200:1/g:ce/aHR0cDovL2NsaXBh/cnRtYWcuY29tL2lt/YWdlcy9oZWFkc2hv/dC1zaWxob3VldHRl/LWNsaXBhcnQtMjYu/cG5n',
      shortBio: 'I am a person',
    };

    const mockMemberModel = {
      ...mockMemberData,
      createdAt: new Date(),
      updatedAt: new Date(),
      toJSON: jest.fn(),
    } as MemberModel;

    mocked(mockMemberModel.toJSON).mockReturnValue(mockMemberData);

    mocked(MemberModel.find).mockReturnValueOnce(
      Promise.resolve([mockMemberModel])
    );

    await MemberService.listMembers(mockContext);

    expect(mockContext).toHaveProperty('body');
    expect(mockContext.body).toMatchObject({
      members: [mockMemberData],
    });
  });
});
