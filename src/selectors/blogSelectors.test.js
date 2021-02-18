/* eslint-disable max-len */
import { getBlogs } from './blogSelectors';

describe('blog selector', () => {
  it('tests the collection of blogs in state', () => {
    const state = {
      blogs: [{ id: 3, title: 'helooooo', body: 'I said heloooooooo' }]
    };

    const blogs = getBlogs(state);

    expect(blogs).toEqual([{ 
      id: 3, 
      title: 'helooooo', 
      body: 'I said heloooooooo' }]);
  });
});
