import React from 'react';
import PropTypes from 'prop-types';
import CommentsForm from '../form/CommentsForm';
import { useSelector } from 'react-redux';
import { getBlogs } from '../../selectors/blogSelectors';
import CommentsList from '../comments/CommentsList';

const BlogPage = ({ match }) => {

  const blogs = useSelector(getBlogs);
  const myBlog = blogs.find(blog => blog.id === +match.params.id);


  return (
    <div>
      <h2>{myBlog.title}</h2>
      <p>{myBlog.body}</p>
      <CommentsList index={myBlog.id} />
      <CommentsForm index={myBlog.id} />
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
