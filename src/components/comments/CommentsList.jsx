import React from 'react';
import { getComments } from '../../selectors/commentsSelectors';
import { useSelector } from 'react-redux';
import Comment from './Comment';
import PropTypes from 'prop-types';

// passing the comment instead of the index
const CommentsList = ({ index }) => {
  const comments =  useSelector(getComments);

  //right now tis gets all comments
  const commentsArray = comments[index] || [];
  let commentElements = null;

  if(!comments) {
    commentElements = 
    <div>Write a comment</div>;
  } else {
    commentElements = commentsArray.map(comment => (
      <li key={comment}>
        <Comment comment={comment} 
          index={index} />
      </li>
    ));
  }

  return (
    <ul>
      {commentElements}
    </ul>
  );
};

CommentsList.propTypes = {
  index: PropTypes.number.isRequired
};

export default CommentsList;
