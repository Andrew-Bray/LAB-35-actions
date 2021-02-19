import React from 'react';
import { getComments } from '../../selectors/commentsSelectors';
import { useSelector } from 'react-redux';
import Comment from './Comment';
import PropTypes from 'prop-types';


const CommentsList = ({ index }) => {
  const comments =  useSelector(getComments);
  //right now tis gets all comments

  const commentElements = comments.map(comment => (
    <li key={comment.text}>
      <Comment comment={ comment.text, index } />
    </li>
  ));

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
