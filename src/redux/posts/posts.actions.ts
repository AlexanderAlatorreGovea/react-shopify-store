import POSTS_ACTION_TYPES from "./types";

export const fetchPostsStart = () => {
  return {
    type: POSTS_ACTION_TYPES.FETCH_POSTS_START,
  };
};

export const fetchPostsSuccess = (posts: any) => {
  return {
    type: POSTS_ACTION_TYPES.FETCH_POSTS_SUCCESS,
    payload: posts,
  };
};

export const fetchPostsFailure = (errorMessage: any) => {
  return {
    type: POSTS_ACTION_TYPES.FETCH_POSTS_FAILURE,
    payload: errorMessage,
  };
};

export const fetchPosts = () => {
  return async (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
    dispatch(fetchPostsStart());
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (!response.ok) {
        throw new Error("Could not fetch posts data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const postsData = await fetchData();

      dispatch(fetchPostsSuccess(postsData));
    } catch (error) {
      dispatch(fetchPostsFailure(error.message));
    }
  };
};
