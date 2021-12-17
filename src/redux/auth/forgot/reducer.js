import {
    FORGOT_CHANGE_FORM, FORGOT_CLEAN_FORM, FORGOT_RESET_STATES,
    RESET_PASSWORD_ERROR,
    RESET_PASSWORD_REQUESTING, RESET_PASSWORD_SUCCESS,
    SEND_EMAIL_ERROR,
    SEND_EMAIL_REQUESTING,
    SEND_EMAIL_SUCCESS, SEND_TOKEN_ERROR,
    SEND_TOKEN_REQUESTING,
    SEND_TOKEN_SUCCESS,
    FORGOT_RESET_ALL_STATES
} from "./constants";

const initialState = {
    requesting: false,
    success: false,
    error: '',
    sendEmail: true,
    sendToken: false,
    resetPassword: false,
    values: {
        email: '',
        token: '',
        password: '',
        rePassword: '',
    },
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_EMAIL_REQUESTING:
            return {
                ...state,
                requesting: true,
                success: false,
                error: '',
            };
        case SEND_EMAIL_SUCCESS:
            return {
                ...state,
                requesting: false,
                success: true,
                sendEmail: false,
                sendToken: true,
            };
        case SEND_EMAIL_ERROR:
            return {
                ...state,
                requesting: false,
                error: action.error,
            };
        case SEND_TOKEN_REQUESTING:
            return {
                ...state,
                requesting: true,
                success: false,
                error: '',
            };
        case SEND_TOKEN_SUCCESS:
            return {
                ...state,
                requesting: false,
                success: true,
                sendToken: false,
                resetPassword: true,
            };
        case SEND_TOKEN_ERROR:
            return {
                ...state,
                requesting: false,
                error: action.error,
            };
        case RESET_PASSWORD_REQUESTING:
            return {
                ...state,
                requesting: true,
                success: false,
                error: '',
            };
        case RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                requesting: false,
                success: true,
                // resetPassword: false,
                resetPassword: true,
                sendEmail: true,
            };
        case RESET_PASSWORD_ERROR:
            return {
                ...state,
                requesting: false,
                error: action.error,
            };
        case FORGOT_CHANGE_FORM:
            return {
                ...state,
                values: {...state.values, [action.key]: action.value}
            };
        case FORGOT_CLEAN_FORM:
            return {
                ...state,
                sendEmail: true,
                sendToken: false,
                resetPassword: false,
                values: {
                    email: '',
                    token: '',
                    password: '',
                    rePassword: '',
                },
            };
        case FORGOT_RESET_STATES:
            return {
                ...state,
                requesting: false,
                success: false,
                error: '',
            };
        case FORGOT_RESET_ALL_STATES:
            return {
                ...state,
                requesting: false,
                success: false,
                error: '',
                sendEmail: true,
                sendToken: false,
                resetPassword: false,
                values: {
                    email: '',
                    token: '',
                    password: '',
                    rePassword: '',
                },
            };
        default:
            return state;
    }
};

export default reducer;