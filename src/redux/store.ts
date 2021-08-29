import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./root-reducer";

const middlewares = [thunk, logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type RootProps = ReturnType<typeof rootReducer>;
