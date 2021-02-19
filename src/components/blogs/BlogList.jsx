import React from 'react';
import { getBlogs } from '../../selectors/blogSelectors';
import { useSelector } from 'react-redux';
import Blog from './Blog';


const BlogList = () => {
  const blogs =  useSelector(getBlogs);

  const blogElements = blogs.map(blog => (
    <li key={blog.id}>
      <Blog {...blog} />
    </li>
  ));

  return (
    <ul>
      {blogElements}
    </ul>
  );
};

export default BlogList;
