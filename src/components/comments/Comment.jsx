import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from  'react-redux';
import { deleteComment } from '../../actions/commentActions';

const Comment = ({ comment, index }) => {
  console.log(`my comment: ${comment}`);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteComment(index, comment));
  };

  return (
    <div>
      <p>{comment}</p>
      <button onClick={handleClick}>DELETE</button>
    </div> 
  );
};

Comment.propTypes = {
  comment: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};

export default Comment;
