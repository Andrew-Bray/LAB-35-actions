export const CREATE_BLOG = 'CREATE_BLOG';
export const createBlog = blog => ({
  type: CREATE_BLOG,
  payload: blog
});

export const DELETE_BLOG = 'DELETE_BLOG';
export const deleteBlog = blog => ({
  type: DELETE_BLOG,
  payload: blog
});
