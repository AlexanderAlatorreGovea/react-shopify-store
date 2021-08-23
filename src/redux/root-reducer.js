import { combineReducers } from "redux";

import sideNavReducer from "./side-nav/side-nav.reducer";
import postsReducer  from './posts/posts.reducers';
import productsReducer from './products/products.reducers';

export default combineReducers({
  sideNav: sideNavReducer,
  posts: postsReducer,
  products: productsReducer
});
