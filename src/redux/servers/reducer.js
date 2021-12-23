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

const initialState = {
    requesting: false,
    success: false,
    error: '',
    servers: [],
    values: {
        name: "",
        ip: "",
        vpn: "",
        ipNormal: "",
        ipVpn: "",
        state: "",
        config: "",
    },
  
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SERVERS_GET_REQUESTING:
            return {
                ...state,
                requesting: true,
                success: false,
                error: '',
            };
        case SERVERS_GET_SUCCESS:
            return {
                ...state,
                requesting: false,
                success: true,
                servers: action.servers,
            };
        case SERVERS_GET_ERROR:
            return {
                ...state,
                requesting: false,
                error: action.error,
            };
        case SERVERS_RESET_STATES:
            return {
                ...state,
                requesting: false,
                success: false,
                error: '',
            };
       
        default:
            return state;
    }
};

export default reducer;
