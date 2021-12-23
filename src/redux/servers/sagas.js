import { call, all, put, takeEvery } from "redux-saga/effects";
import { ROUTE_ENDPOINT } from "../../utils/route";
import {
  serversGetSuccess,
  serversGetError,
//   serversUpdateRequesting,
//   serversUpdateSuccess,
//   serversUpdateError,
//   serversDeleteRequesting,
//   serversDeleteSuccess,
//   serversDeleteError,
//   serversChangeForm,
  serversResetStates,
} from "./actions";
import { SERVERS_GET_REQUESTING, SERVERS_UPDATE_REQUESTING, SERVERS_DELETE_REQUESTING } from "./constants";

const serversUrl = `${ROUTE_ENDPOINT}/servers`; 

const serversGetApi = (token) => {
  return fetch(`${serversUrl}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((json) => {
      // console.log(json.data);

      if (json.code === 422) throw json.data;
      if (json.code === 400) throw json.data;
      if (json.code === 401) throw json.data;
      if (json.data){
        //   console.log(json.data.data);
        return json.data;  
      } 
      throw json.data;
    })
    .catch((error) => {
      throw error;
    });
};

function* serverGetFlow(action) {
  try {
    const { token } = action;
    const servers = yield call(serversGetApi, token);
    yield put(serversGetSuccess(servers));
    yield put(serversResetStates());
  } catch (error) {
    yield put(serversGetError(error));
  }
}

// const userUpdateApi = (token, values) => {
//     let body = new FormData();
//     body.append('_method', 'PUT');
//     body.append('name', values.name || '');
//     body.append('email', values.email || '');
//     body.append('identification', values.identification || '');
//     body.append('phone', values.phone || '');
//     body.append('city', values.city || '');
//     body.append('photos_length', values.photos.length || 0);
//     console.log(values.photos.length, values);
//     if (values.photos.length > 0)
//         values.photos.map((fileItem, index) => {
//             // let file = {uri: fileItem.uri, name: fileItem.fileName, type: fileItem.type || 'image/jpeg'};
//             body.append(`photo_${index}`, fileItem);
//         });
//     return fetch(`${userUrl}/${values.id}`, {
//         method: 'POST',
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//         body: body,
//     })
//         .then(response => response.json())
//         .then(json => {
//             if (json.code === 422)
//                 throw json.data;
//             if (json.code === 400)
//                 throw json.data.data;
//             if (json.data.data.hasOwnProperty('id'))
//                 return json.data.data;
//             throw json.data;
//         }).catch((error) => {
//             throw error;
//         })
// };

// function* userUpdateFlow(action) {
//     try {
//         const {token, values} = action;
//         console.log(values);
//         const user = yield call(userUpdateApi, token, values);
//         yield put(userUpdateSuccess(user));
//         // yield put(handlerAlertModal('success', 'Usuario actualizado con éxito.'));
//         yield put(userResetStates());
//     } catch (error) {
//         if (error.data === 'Debe cambiar al menos un dato.')
//         // yield put(handlerAlertModal('error', error.data));
//         // yield put(handlerAlertModal('error', 'Ups! Al parecer hubo un error, por favor verifica nuevamente.'));
//         yield put(userUpdateError(error));
//     }
// }

function* userWatcher() {
  yield all([
    takeEvery(SERVERS_GET_REQUESTING, serverGetFlow),
    // takeEvery(SERVERS_UPDATE_REQUESTING, serverUpdateFlow),
  ]);
}

export default userWatcher;
