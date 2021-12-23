// {llamar a una funcion, agrupar, llamar a acciones de redux, suscribirse a un evento de redux}
import {call, all, put, takeEvery} from 'redux-saga/effects';
import {ROUTE_ENDPOINT} from "../../../utils/route";
import {logoutSuccess, logoutError} from "./actions";
import {LOGOUT_REQUESTING} from "./constants";
import {clientUnset} from "../../client/actions";
import {userResetStatesLogout} from "../user/actions";
import {deviceDeleteRequesting} from "../device/actions";
// import {handlerAlertModal} from "../../menusModals/actions";

const logoutUrl = `${ROUTE_ENDPOINT}/auth/logout`;


const logoutApi = (token) => {
    return fetch(`${logoutUrl}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
        .then(response => response.json())
        .then(json => {
            if (json.code === 422)
                throw json.data;
            if (json.code === 400)
                throw json.data;
            if (json.code === 200)
                return json.data.data;
            throw json.data;
        }).catch((error) => {
            throw error;
        })
};

function* logoutFlow(action) {
    try {
        const {token} = action;
        yield call(logoutApi, token);
        yield put(logoutSuccess());
        yield put(clientUnset());
        yield put(userResetStatesLogout());
    } catch (error) {
        yield put(logoutError(error));
    }
}

function* logoutWatcher() {
    yield all([
        takeEvery(LOGOUT_REQUESTING, logoutFlow),
    ])
}

export default logoutWatcher;