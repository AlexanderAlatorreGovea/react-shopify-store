import { combineReducers } from "redux";

import sideNavReducer from "./side-nav/side-nav.reducer";

export default combineReducers({
  sideNav: sideNavReducer,
});
