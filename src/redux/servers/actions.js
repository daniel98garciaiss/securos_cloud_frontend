import {
    SERVERS_GET_REQUESTING ,
    SERVERS_GET_SUCCESS ,
    SERVERS_GET_ERROR ,
    
    SERVERS_UPDATE_REQUESTING ,
    SERVERS_UPDATE_SUCCESS ,
    SERVERS_UPDATE_ERROR ,
    
    SERVERS_DELETE_REQUESTING ,
    SERVERS_DELETE_SUCCESS ,
    SERVERS_DELETE_ERROR,
    
    SERVERS_CHANGE_FORM ,
    SERVERS_RESET_STATES ,
    SERVERS_RESET_STATES_LOGOUT,
} from "./constants";

export const serversGetRequesting = (token) => ({
    type: SERVERS_GET_REQUESTING,
    token,
});

export const serversGetSuccess = (servers) => ({
    type: SERVERS_GET_SUCCESS,
    servers,
});

export const serversGetError = (error) => ({
    type: SERVERS_GET_ERROR,
    error,
});

export const serversUpdateRequesting = (token, values) => ({
    type: SERVERS_UPDATE_REQUESTING,
    token, values,
});

export const serversUpdateSuccess = (server) => ({
    type: SERVERS_UPDATE_SUCCESS,
    server,
});

export const serversUpdateError = (error) => ({
    type: SERVERS_UPDATE_ERROR,
    error,
});

export const serversDeleteRequesting = (token, values) => ({
    type: SERVERS_UPDATE_REQUESTING,
    token, values,
});

export const serversDeleteSuccess = (server) => ({
    type: SERVERS_UPDATE_SUCCESS,
    server,
});

export const serversDeleteError = (error) => ({
    type: SERVERS_UPDATE_ERROR,
    error,
});

export const serversChangeForm = (key, value) => ({
    type: SERVERS_CHANGE_FORM,
    key, value,
});

export const serversResetStates = () => ({
    type: SERVERS_RESET_STATES,
});
