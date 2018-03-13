import { combineReducers } from 'redux';
import posts from './posts';
import nextId from './nextId';
import filter from './filter';

const rootReducer = combineReducers({
  posts,
  nextId,
  filter
});

export default rootReducer;