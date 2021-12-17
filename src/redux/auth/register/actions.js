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

export const registerRequesting = (values) => ({
    type: REGISTER_REQUESTING,
    values,
});

export const registerSuccess = () => ({
    type: REGISTER_SUCCESS,
});

export const registerError = (error) => ({
    type: REGISTER_ERROR,
    error,
});

export const registerFirebaseConfirmResult = (confirmResult) => ({
    type: REGISTER_FIREBASE_CONFIRM_RESULT,
    confirmResult,
});

export const registerFirebaseConfirmError = (error) => ({
    type: REGISTER_FIREBASE_CONFIRM_ERROR,
    error,
});

export const registerPhoneRequesting = (values) => ({
    type: REGISTER_PHONE_REQUESTING,
    values,
});

export const registerPhoneSuccess = () => ({
    type: REGISTER_PHONE_SUCCESS,
});

export const registerPhoneError = (error) => ({
    type: REGISTER_PHONE_ERROR,
    error,
});

export const registerChangeForm = (key, value) => ({
    type: REGISTER_CHANGE_FORM,
    key, value,
});

export const registerCleanForm = () => ({
    type: REGISTER_CLEAN_FORM,
});