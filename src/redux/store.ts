import { createStore, applyMiddleware, Store, EmptyObject } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { ProductsAsync } from "../models/products/actions";

import rootReducer from "./root-reducer";

const middlewares = [thunk, logger];

export const store: Store<EmptyObject & {
    sideNav: {
        opened: boolean;
    };
    posts: {
        isFetching: boolean;
        posts: any;
        errorMessage: undefined;
    } | {
        isFetching: boolean;
        errorMessage: any;
        posts: null;
    };
    products: ProductsAsync;
}, any> = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type RootProps = ReturnType<typeof rootReducer>;
