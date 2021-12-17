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

export const sendEmailRequesting = (values) => ({
    type: SEND_EMAIL_REQUESTING,
    values,
});

export const sendEmailSuccess = () => ({
    type: SEND_EMAIL_SUCCESS,
});

export const sendEmailError = (error) => ({
    type: SEND_EMAIL_ERROR,
    error,
});

export const sendTokenRequesting = (values) => ({
    type: SEND_TOKEN_REQUESTING,
    values,
});

export const sendTokenSuccess = () => ({
    type: SEND_TOKEN_SUCCESS,
});

export const sendTokenError = (error) => ({
    type: SEND_TOKEN_ERROR,
    error,
});

export const resetPasswordRequesting = (values) => ({
    type: RESET_PASSWORD_REQUESTING,
    values,
});

export const resetPasswordSuccess = () => ({
    type: RESET_PASSWORD_SUCCESS,
});

export const resetPasswordError = (error) => ({
    type: RESET_PASSWORD_ERROR,
    error,
});

export const forgotChangeForm = (key, value) => ({
    type: FORGOT_CHANGE_FORM,
    key, value,
});

export const forgotCleanForm = () => ({
    type: FORGOT_CLEAN_FORM,
});

export const forgotResetStates = () => ({
    type: FORGOT_RESET_STATES,
});

export const forgotResetAllStates = () => ({
    type: FORGOT_RESET_ALL_STATES,
});