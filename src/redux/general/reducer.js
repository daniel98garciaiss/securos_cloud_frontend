import {
     
    SET_SIDENAV_MENU_TOGGLE,
    
} from "./constants";

const initialState = {
    sideNav: {
        active: false,
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SIDENAV_MENU_TOGGLE:
            return {
                ...state,
                sideNav: {
                    ...state.sideNav,
                    active: action.value,
                }
            };
        default:
            return state;
    }
};

export default reducer;
