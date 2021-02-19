/* eslint-disable max-len */
import { getComments } from './commentsSelectors';

describe('comment selector', () => {
  it('tests the collection of comments in state', () => {
    const state = {
      comments: {
        comments: [{ id: 3, body: 'I said heloooooooo' }]
      }
    };

    const comments = getComments(state);

    expect(comments).toEqual([{ 
      id: 3, 
      body: 'I said heloooooooo' }]);
  });
});
