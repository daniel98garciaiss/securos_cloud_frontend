import {all, fork} from 'redux-saga/effects';

import LoginSagas from './auth/login/sagas';
import ClientSagas from './client/sagas';   
import UserSagas from './auth/user/sagas';

import camerasSagas from './cameras/sagas';

function* IndexSagas() {
    yield all([
        fork(LoginSagas),
        fork(ClientSagas),
        fork(UserSagas),
        // fork(camerasSagas),
    ]);
}
export default IndexSagas