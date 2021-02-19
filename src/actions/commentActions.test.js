import { createComment, 
  deleteComment, 
  CREATE_COMMENT, 
  DELETE_COMMENT } from './commentActions';

describe('comment actions', () => {
  it('creates a comment-making action', () => {
    const action = createComment(2, 'heeeeeeello');
  
    expect(action).toEqual({
      type: CREATE_COMMENT,
      payload: {
        blogIndex: 2,
        comment: 'heeeeeeello' }
    });
  });
  
  it('creates a blog-deleting action', () => {
    const action = deleteComment(2, 'heeeeeeello');
  
    expect(action).toEqual({
      type: DELETE_COMMENT,
      payload: {
        blogIndex: 2,
        comment: 'heeeeeeello' }
    });
  });
});
