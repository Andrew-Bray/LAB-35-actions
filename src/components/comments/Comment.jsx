import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from  'react-redux';
import { deleteComment } from '../../actions/commentActions';

const Comment = (props) => {
  console.log(`my comment props ${props}`);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteComment(postIndex, text));
  };

  return (
    <div>
      <p>{text}</p>
      <button onClick={handleClick}>DELETE</button>
    </div> 
  );
};

Comment.propTypes = {
  text: PropTypes.string.isRequired,
  postIndex: PropTypes.number.isRequired
};

export default Comment;
