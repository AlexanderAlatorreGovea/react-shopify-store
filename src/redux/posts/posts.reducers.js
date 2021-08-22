import POSTS_ACTION_TYPES from "./types";

const INITIAL_STATE = {
  posts: null,
  isFetching: false,
  errorMessage: undefined
};

const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POSTS_ACTION_TYPES.FETCH_POSTS_START:
      return {
        ...state,
        isFetching: true
      };
    case POSTS_ACTION_TYPES.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        posts: action.payload
      };
    case POSTS_ACTION_TYPES.FETCH_POSTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
      default:
        return state;
  }
};

export default postsReducer;