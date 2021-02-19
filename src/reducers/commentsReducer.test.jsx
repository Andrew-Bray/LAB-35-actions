import { createComment, deleteComment } from '../actions/commentActions';
import reducer from './commentsReducer';

describe('comments test', () => {
  it('should make a comment', () => {
    const state = {
      comments: []
    };

    const action = createComment( 2, 'hi hi hi');

    const newState = reducer(state, action);

    expect(newState).toEqual({
      comments: [{ blogIndex: 2, comment: 'hi hi hi' }]
    });
  });
  it('should delete a comment', async() => {
    const state = {
      comments: [
        { blogIndex: 2,
          comment: 'hi hi hi ' }
      ]
    };

    const action = await deleteComment('hi hi hi');


    const newState = reducer(state, action);

    expect(newState).toEqual({
      comments: []
    });
  });
});

