import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CommentsForm from '../form/CommentsForm';
import { useSelector } from 'react-redux';
import { getBlogs } from '../../selectors/blogSelectors';
import CommentsList from '../comments/CommentsList';

const BlogPage = async({ match }) => {
  const [blog, setBlog] = useState({});
  const blogs = useSelector(getBlogs);
  const myBlog = await blogs.filter(blg => String(blg.id) === match.params.id);
  console.log(myBlog);
  useEffect(() => {
    setBlog({ id: myBlog.id, body: myBlog.body, title: myBlog.title });
  }, []);
console.log(blog);

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.body}</p>
      <CommentsList index={blog.id} />
      <CommentsForm index={blog.id} />
    </div>
  );
};

BlogPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired })
      .isRequired })
    .isRequired
};

export default BlogPage;
