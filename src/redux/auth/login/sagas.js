import {call, all, put, takeEvery} from 'redux-saga/effects';
import {ROUTE_ENDPOINT} from "../../../utils/route";
import {
    loginSuccess,
    loginError,
    loginFacebookSuccess,
    loginFacebookError,
    loginMobileSuccess,
    loginMobileError, loginResetStates
} from "./actions";
import {LOGIN_REQUESTING} from "./constants";
// import NavigationService from "../../../utils/NavigationService";
import {checkJWTRequesting} from "../../client/actions";
// import {handlerAlertModal} from "../../menusModals/actions";

// import {DropDownHolder} from "../../../../App";
const base64 = require("base-64");

const loginUrl = `${ROUTE_ENDPOINT}/auth/sign-in`;



const loginApi = (values) => {
    const {nickName, password} = values;
    return fetch(`${loginUrl}`, {
        method: 'POST',
        headers: new Headers({
            "Authorization": `Basic ${base64.encode(`${nickName}:${password}`)}`
        }),
    })
        .then(response => response.json())
        .then(json => {
            if (json.code === 422)
                throw json.data;
            if (json.code === 401)
                throw json.data;
            if (json.hasOwnProperty('token'))
                return json.token;
            throw ''
        }).catch((error) => {
            throw error;
        })
};

function* loginFlow(action) {
    try {
        const {values} = action;
        const token = yield call(loginApi, values);
        // console.log(token);
        yield put(loginSuccess());
        yield put(loginResetStates());
        yield put(checkJWTRequesting(token));
        // yield put(setTokenStorage(token));
    } catch (error) {
        // yield put(handlerAlertModal('error', 'Ups! Al parecer hubo un error, por favor verifica nuevamente.'));
        yield put(loginError(error));
    }
}

function* loginWatcher() {
    yield all([
        takeEvery(LOGIN_REQUESTING, loginFlow),
    ])
}

export default loginWatcher;
