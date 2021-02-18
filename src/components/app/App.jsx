import React from 'react';
import BlogList from '../blogs/BlogList';
import BlogForm from '../form/BlogForm';
import './app.css';

export default function App() {
  return (
    <div className="main-body">
      <BlogList />
      <BlogForm />
    </div>
  );
}
