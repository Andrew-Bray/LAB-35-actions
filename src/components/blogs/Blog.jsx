import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from '../../state/BlogProvider';
import { deleteBlog } from '../../actions/blogActions';

const Blog = ({ title, body, id }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteBlog(id));
  };
  
  return (
    <>
      <h2>{title}</h2>
      <p>{body}</p>
      <button onClick={handleClick}>&#9785;</button>
      
    </>
  );
};

Blog.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body:PropTypes.string.isRequired
};

export default Blog;
