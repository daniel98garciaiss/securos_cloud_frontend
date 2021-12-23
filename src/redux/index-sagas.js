import {all, fork} from 'redux-saga/effects';

import LoginSagas from './auth/login/sagas';
import ClientSagas from './client/sagas';   
import UserSagas from './auth/user/sagas';

// import CamerasSagas from './cameras/sagas';
import ServersSagas from './servers/sagas';

function* IndexSagas() {
    yield all([
        fork(LoginSagas),
        fork(ClientSagas),
        fork(UserSagas),
        fork(ServersSagas),
        // fork(CamerasSagas),
    ]);
}
export default IndexSagas