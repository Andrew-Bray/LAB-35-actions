import { combineReducers } from 'redux';
import postReducer from './postReducer';
import commentsReducer from  './commentsReducer';

export default combineReducers({
  posts: postReducer,
  comments: commentsReducer
});
