import {
    USER_CHANGE_FORM,
    USER_GET_ERROR,
    USER_GET_REQUESTING,
    USER_GET_SUCCESS,
    USER_RESET_STATES,
    USER_RESET_STATES_LOGOUT,
    USER_UPDATE_ERROR,
    USER_UPDATE_REQUESTING,
    USER_UPDATE_SUCCESS
} from "./constants";

const initialState = {
    requesting: false,
    success: false,
    error: '',
    user: {},
    values: {
        name: "",
        lastName: "",
        nickName: "",
        rol: "",
    },
  
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_GET_REQUESTING:
            return {
                ...state,
                requesting: true,
                success: false,
                error: '',
            };
        case USER_GET_SUCCESS:
            return {
                ...state,
                requesting: false,
                success: true,
                user: action.user,
                values: {
                    name: action.user.name,
                    lastName: action.user.lastName,
                    nickName: action.user.nickName,
                    rol: action.user.rol,
                },
            };
        case USER_GET_ERROR:
            return {
                ...state,
                requesting: false,
                error: action.error,
            };
        case USER_UPDATE_REQUESTING:
            return {
                ...state,
                requesting: true,
                success: false,
                error: '',
            };
        case USER_UPDATE_SUCCESS:
            return {
                ...state,
                requesting: false,
                success: true,
                user: action.user,
                values: {
                    name: action.user.name,
                    lastName: action.user.lastName,
                    nickName: action.user.nickName,
                    rol: action.user.rol,
                },
                
            };
        case USER_UPDATE_ERROR:
            return {
                ...state,
                requesting: false,
                error: action.error,
            };
        case USER_CHANGE_FORM:
            return {
                ...state,
                values: {...state.values, [action.key]: action.value},
            };
        case USER_RESET_STATES:
            return {
                ...state,
                requesting: false,
                success: false,
                error: '',
                values: {
                    name: state.user.hasOwnProperty('_id') ? state.values.name : '',
                    lastName: state.user.hasOwnProperty('_id') ? state.values.lastName : '',
                    nickName: state.user.hasOwnProperty('_id') ? state.values.nickName : '',
                    rol: state.user.hasOwnProperty('_id') ? state.values.rol: '',
                },
            };
        case USER_RESET_STATES_LOGOUT:
            return {
                ...state,
                requesting: false,
                success: false,
                error: '',
                user: {},
                values: {
                    name: "",
                    lastName: "",
                    nickName: "",
                    rol:"",
                },
            };
       
        default:
            return state;
    }
};

export default reducer;
