import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BlogPage from '../blogs/BlogPage';
import Home from '../home/Home';
import './app.css';

export default function App() {
  return (

    <div className="main-body">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/blogpost/:id" component={BlogPage} />
        </Switch>
      </Router>
    </div>
  );
}
