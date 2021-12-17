import {call, all, put, takeEvery} from 'redux-saga/effects';
import {ROUTE_ENDPOINT} from "../../../utils/route";
import {logoutSuccess, logoutError} from "./actions";
import {LOGOUT_REQUESTING} from "./constants";
// import NavigationService from "../../../utils/NavigationService";
import {clientUnset} from "../../client/actions";
// import AsyncStorage from '@react-native-community/async-storage';
import {userResetStatesLogout} from "../user/actions";
import {deviceDeleteRequesting} from "../device/actions";
// import {Platform} from "react-native";
import {handlerAlertModal} from "../../menusModals/actions";

const logoutUrl = `${ROUTE_ENDPOINT}/logout`;

const removeTokenStorage = () => {
    AsyncStorage.removeItem('@app:ekocampo');
    NavigationService.navigate('ListProduct');
};

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
        let values = {os: Platform.OS};
        const {token} = action;
        yield call(logoutApi, token);
        yield put(logoutSuccess());
        yield put(clientUnset());
        yield put(userResetStatesLogout());
        yield put(removeTokenStorage());
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