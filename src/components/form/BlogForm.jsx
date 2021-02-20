import React, { useState } from 'react';
import { createBlog } from '../../actions/blogActions';
import { useDispatch } from 'react-redux';

const BlogForm = () => {
  const dispatch = useDispatch();
  
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  // const [id, setId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Date.now();
    dispatch(createBlog({ id, title, body }));
    setTitle('');
    setBody('');
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Title">Title</label>
        <input 
          type="text"  
          placeholder="Title"
          value={title}
          onChange={({ target }) => setTitle(target.value)}/>
        <label htmlFor="Body">Body</label>
        <textarea 
          rows="6"
          columns="50" 
          placeholder="Body" 
          value={body}
          onChange={({ target }) => setBody(target.value)}/>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default BlogForm;
