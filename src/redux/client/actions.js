import {
    CHECK_JWT_ERROR,
    CHECK_JWT_REQUESTING,
    CLIENT_SET,
    CLIENT_UNSET,
} from "./constants";


export const clientSet = (token) => ({
    type: CLIENT_SET,
    token
});

export const clientUnset = () => ({
    type: CLIENT_UNSET
});

export const checkJWTRequesting = (token) => ({
    type: CHECK_JWT_REQUESTING,
    token
});

export const checkJWTError = (error) => ({
    type: CHECK_JWT_ERROR,
    error
});
