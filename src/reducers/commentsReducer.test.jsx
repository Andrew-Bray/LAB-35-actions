import { createComment, deleteComment } from '../actions/commentActions';
import reducer from './commentsReducer';

describe('comments test', () => {
  it('should make a comment', () => {
    const state = {
    };

    const action = createComment(2, 'hi hi hi');

    const newState = reducer(state, action);

    expect(newState).toEqual(
      { 2: ['hi hi hi'] }
      
    );

  });
  it('should delete a comment', async() => {
    const state = 
  { 2: ['hi hi hi'] }
    ;

    const action = await deleteComment(2, 'hi hi hi');


    const newState = reducer(state, action);

    expect(newState).toEqual({ 2: [] });
  });
});

