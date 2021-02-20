/* eslint-disable max-len */
import { getComments } from './commentsSelectors';

describe('comment selector', () => {
  it('tests the collection of comments in state', () => {
    const state = {
      comments: {
        0: ['I said heloooooooo'] }
    };
    

    const comments = getComments(state);

    expect(comments).toEqual({
      0: ['I said heloooooooo']});
  });
});


