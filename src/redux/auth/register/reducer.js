import {
    REGISTER_CHANGE_FORM,
    REGISTER_CLEAN_FORM,
    REGISTER_ERROR,
    REGISTER_FIREBASE_CONFIRM_ERROR,
    REGISTER_FIREBASE_CONFIRM_RESULT, REGISTER_PHONE_ERROR,
    REGISTER_PHONE_REQUESTING,
    REGISTER_PHONE_SUCCESS,
    REGISTER_REQUESTING,
    REGISTER_SUCCESS
} from "./constants";

const initialState = {
    requesting: false,
    success: false,
    error: '',
    errorFirebase: null,
    values: {
        name: '',
        email: '',
        password: '',
        terms: true,
        phone: '',
        code: '',
    },
    confirmResult: null,
    phoneCodeSend: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUESTING:
            return {
                ...state,
                requesting: true,
                success: false,
                error: '',
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                requesting: false,
                success: true,
            };
        case REGISTER_ERROR:
            return {
                ...state,
                requesting: false,
                error: action.error,
            };
        case REGISTER_FIREBASE_CONFIRM_RESULT:
            return {
                ...state,
                confirmResult: action.confirmResult,
                phoneCodeSend: true,
            };
        case REGISTER_FIREBASE_CONFIRM_ERROR:
            return {
                ...state,
                errorFirebase: action.error,
            };
        case REGISTER_PHONE_REQUESTING:
            return {
                ...state,
                requesting: true,
                success: false,
                error: '',
            };
        case REGISTER_PHONE_SUCCESS:
            return {
                ...state,
                requesting: false,
                success: true,
            };
        case REGISTER_PHONE_ERROR:
            return {
                ...state,
                requesting: false,
                error: action.error,
            };
        case REGISTER_CHANGE_FORM:
            return {
                ...state,
                values: {...state.values, [action.key]: action.value}
            };
        case REGISTER_CLEAN_FORM:
            return {
                ...state,
                success: false,
                values: {
                    name: '',
                    email: '',
                    phone: '',
                    password: '',
                    terms: false,
                },
            };
        default:
            return state;
    }
};

export default reducer;