import {call, all, put, takeEvery} from 'redux-saga/effects';
import {ROUTE_ENDPOINT} from "../../../utils/route";
import {
    userGetError,
    userGetSuccess,
    userResetStates,
    userUpdateError,
    userUpdateSuccess
} from "./actions";
import {USER_GET_REQUESTING, USER_UPDATE_REQUESTING} from "./constants";
import {clientSet} from "../../client/actions";
// import {DropDownHolder} from "../../../../App";
// import {handlerAlertModal} from "../../menusModals/actions";

const userUrl = `${ROUTE_ENDPOINT}/users`;
const meUrl = `${ROUTE_ENDPOINT}/users/me`;

const userGetApi = (token) => {
    return fetch(`${meUrl}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
        .then(response => response.json())
        .then(json => {
            // console.log(json.data);

            if (json.code === 422)
                throw json.data;
            if (json.code === 400)
                throw json.data;
            if (json.code === 401)
                throw json.data;
            if (json.data.hasOwnProperty('_id'))
                return json.data;
            throw json.data;
        }).catch((error) => {
            throw error;
        })
};

function* userGetFlow(action) {
    try {
        const {token} = action;
        const user = yield call(userGetApi, token);
        yield put(userGetSuccess(user));
        yield put(clientSet(token));
        yield put(userResetStates());
    } catch (error) {
        yield put(userGetError(error));
    }
}

const userUpdateApi = (token, values) => {
    let body = new FormData();
    body.append('_method', 'PUT');
    body.append('name', values.name || '');
    body.append('email', values.email || '');
    body.append('identification', values.identification || '');
    body.append('phone', values.phone || '');
    body.append('city', values.city || '');
    body.append('photos_length', values.photos.length || 0);
    console.log(values.photos.length, values);
    if (values.photos.length > 0)
        values.photos.map((fileItem, index) => {
            // let file = {uri: fileItem.uri, name: fileItem.fileName, type: fileItem.type || 'image/jpeg'};
            body.append(`photo_${index}`, fileItem);
        });
    return fetch(`${userUrl}/${values.id}`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: body,
    })
        .then(response => response.json())
        .then(json => {
            if (json.code === 422)
                throw json.data;
            if (json.code === 400)
                throw json.data.data;
            if (json.data.data.hasOwnProperty('id'))
                return json.data.data;
            throw json.data;
        }).catch((error) => {
            throw error;
        })
};

function* userUpdateFlow(action) {
    try {
        const {token, values} = action;
        console.log(values);
        const user = yield call(userUpdateApi, token, values);
        yield put(userUpdateSuccess(user));
        // yield put(handlerAlertModal('success', 'Usuario actualizado con éxito.'));
        yield put(userResetStates());
    } catch (error) {
        if (error.data === 'Debe cambiar al menos un dato.')
        // yield put(handlerAlertModal('error', error.data));
        // yield put(handlerAlertModal('error', 'Ups! Al parecer hubo un error, por favor verifica nuevamente.'));
        yield put(userUpdateError(error));
    }
}

function* userWatcher() {
    yield all([
        takeEvery(USER_GET_REQUESTING, userGetFlow),
        takeEvery(USER_UPDATE_REQUESTING, userUpdateFlow),
    ])
}

export default userWatcher;
