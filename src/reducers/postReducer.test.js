import { createBlog, deleteBlog } from '../actions/blogActions';
import reducer from './postReducer';


describe('blog', () => {
  it('should make a blog post', () => {
    const state = {
      blogs: []
    };

    const  action = createBlog({
      id: 654,
      title: 'my title 1',
      body: 'oooo what a hawt body'
    });

    const newState = reducer(state, action);

    expect(newState).toEqual({
      blogs: [{
        id: 654,
        title: 'my title 1',
        body: 'oooo what a hawt body'
      }]     
    });
  });

  it('should delete a blog post', () => {
    const state = {
      blogs: [{
        id: 654,
        title: 'my title 1',
        body: 'oooo what a hawt body'
      }]
    };

    const  action = deleteBlog(654
    );

    const newState = reducer(state, action);

    expect(newState).toEqual({
      blogs: []     
    });
  });
});
