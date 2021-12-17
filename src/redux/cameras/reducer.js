// import {
     
//     USER_GET_REQUESTING,
    
// } from "./constants";

const initialState = {
    hola: true,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "USER_GET_REQUESTING":
            return {
                ...state,
                requesting: true,
                success: false,
                error: '',
            };
        default:
            return state;
    }
};

export default reducer;
