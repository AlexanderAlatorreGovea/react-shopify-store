import SIDE_NAV_TYPES from "./types";
 
export const showSideNav = () => { 
    return {
        type: SIDE_NAV_TYPES.OPEN_SIDENAV,
    }
};

export const hideSideNav = () => {
    return {
        type: SIDE_NAV_TYPES.CLOSE_SIDENAV,
    }
};
