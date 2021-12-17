import {call, all, put, takeEvery} from 'redux-saga/effects';
import { push } from 'react-router-redux';
import {ROUTE_ENDPOINT} from "../../../utils/route";
import {loginRequesting} from "../login/actions";
import {registerCleanForm, registerError, registerPhoneError, registerPhoneSuccess, registerSuccess} from "./actions";
import {phoneVerifyRequesting} from "../phone/actions";
import {REGISTER_PHONE_REQUESTING, REGISTER_REQUESTING} from "./constants";
// import NavigationService from "../../../utils/NavigationService";
// import {DropDownHolder} from "../../../../App";
import {handlerAlertModal} from "../../menusModals/actions";

const registerUrl = `${ROUTE_ENDPOINT}/register`;

const registerApi = (values) => {
    let body = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        password: values.password,
        terms: values.terms,
    };
    return fetch(`${registerUrl}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })
        .then(response => response.json())
        .then(json => {
            if (json.code === 422)
                throw json.data;
            if (json.code === 400)
                throw json.data;
            if (json.data.data.hasOwnProperty('id'))
                return true;
            throw json.data;
        }).catch((error) => {
            throw error;
        })
};

function* registerFlow(action) {
    try {
        const {values} = action;
        yield call(registerApi, values);
        yield put(registerSuccess());
        yield put(registerCleanForm());
        yield put(loginRequesting(values));
        // NavigationService.navigate('ListProduct');
        yield put(push('/'));

    } catch (error) {
        yield put(handlerAlertModal('error', 'Ups! Al parecer hubo un error, por favor verifica nuevamente.'));
        yield put(registerError(error));
    }
}

const registerPhoneApi = (values) => {
    let body = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        terms: values.terms,
    };
    return fetch(`${registerUrl}Phone`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })
        .then(response => response.json())
        .then(json => {
            if (json.code === 422)
                throw json.data;
            if (json.code === 400)
                throw json.data;
            if (json.data.data.hasOwnProperty('id'))
                return true;
            throw json.data;
        }).catch((error) => {
            throw error;
        })
};

function* registerPhoneFlow(action) {
    try {
        const {values} = action;
        yield call(registerPhoneApi, values);
        yield put(registerPhoneSuccess());
        yield put(registerCleanForm());
        yield put(phoneVerifyRequesting(values.phone));
    } catch (error) {
        yield put(handlerAlertModal('error', 'Ups! Al parecer hubo un error, por favor verifica nuevamente.'));
        yield put(registerPhoneError(error));
    }
}

function* registerWatcher() {
    yield all([
        takeEvery(REGISTER_REQUESTING, registerFlow),
        takeEvery(REGISTER_PHONE_REQUESTING, registerPhoneFlow),
    ])
}

export default registerWatcher;