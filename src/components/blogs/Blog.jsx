import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBlog } from '../../actions/blogActions';
import { Link } from 'react-router-dom';

const Blog = ({ title, body, id }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteBlog(id));
  };
  
  return (
    <div>
      <Link to={`/blogpost/${id}`} 
        title={title}
        body={body}
        index={id}>
        <h2>{title}</h2>
      </Link>
      <p>{body}</p>
      <button onClick={handleClick}>&#9785;</button>
    </div> 
  );
};

Blog.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body:PropTypes.string.isRequired
};

export default Blog;
