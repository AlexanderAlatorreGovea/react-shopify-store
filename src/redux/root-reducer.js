import { combineReducers } from "redux";

import sideNavReducer from "./side-nav/side-nav.reducer";
import postsReducer  from './posts/posts.reducers';

export default combineReducers({
  sideNav: sideNavReducer,
  posts: postsReducer
});
