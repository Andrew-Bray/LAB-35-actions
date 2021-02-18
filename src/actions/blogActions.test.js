import { createBlog, deleteBlog, CREATE_BLOG, DELETE_BLOG } from './blogActions';


describe('blog actions', () => {
  it('creates a blog-making action', () => {
    const action = createBlog({
      id: '65',
      title: 'What a test',
      body: 'Here we are, making an awesome test happen.'
    });

    expect(action).toEqual({
      type: CREATE_BLOG,
      payload: {
        id: '65',
        title: 'What a test',
        body: 'Here we are, making an awesome test happen.'
      }
    });
  });

  it('creates a blog-deleting action', () => {
    const action = deleteBlog({
      id: '65',
      title: 'What a test',
      body: 'Here we are, making an awesome test happen.'
    });

    expect(action).toEqual({
      type: DELETE_BLOG,
      payload: {
        id: '65',
        title: 'What a test',
        body: 'Here we are, making an awesome test happen.'
      }
    });
  });
});
