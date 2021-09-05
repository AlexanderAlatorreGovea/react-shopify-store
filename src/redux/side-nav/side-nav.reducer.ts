import SIDE_NAV_TYPES from "./types";

const INITIAL_STATE = {
  opened: false,
};

const sideNavReducer = (state = INITIAL_STATE, action: { type: string }) => {
  switch (action.type) {
    case SIDE_NAV_TYPES.OPEN_SIDENAV:
      return {
        ...state,
        opened: true,
      };
    case SIDE_NAV_TYPES.CLOSE_SIDENAV:
      return {
        ...state,
        opened: false,
      };
    default:
      return state;
  }
};

export default sideNavReducer;
