import React, { useState } from 'react';
import { createComment } from '../../actions/commentActions';
import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';

const CommentsForm = ({ index }) => {
  const dispatch = useDispatch();

  const [text, setText] = useState('');
  const [postIndex, setPostIndex] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    await setPostIndex(index);
    dispatch(createComment({ postIndex, text }));
    setText('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Comment">Comment</label>
        <textarea 
          rows="2"
          columns="30" 
          placeholder="Comment?" 
          value={text}
          onChange={({ target }) => setText(target.value)}/>
        <button>Submit</button>
      </form>
    </div>
  );
};

CommentsForm.propTypes = {
  index: propTypes.number.isRequired
};

export default CommentsForm;
