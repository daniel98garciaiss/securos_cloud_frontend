import { combineReducers } from 'redux';

import loginReducer from './auth/login/reducer';
import clientReducer from './client/reducer';
import userReducer from './auth/user/reducer';
import camerasReducer from './cameras/reducer';
import generalReducer from './general/reducer';


export default combineReducers({
    loginReducer,
    clientReducer,
    userReducer,
    camerasReducer,
    generalReducer,
});