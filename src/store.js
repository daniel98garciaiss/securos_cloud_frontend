import {createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './redux/index-reducer';

import createSagaMiddleware from 'redux-saga';
import IndexSagas from './redux/index-sagas';

import { persistStore, persistReducer } from "redux-persist"
const storage = require('redux-persist/lib/storage').default;

const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
     key: "root",
     whitelist: [''],
     storage,
     }

const persistedReducer = persistReducer(persistConfig, rootReducer)


// export default createStore(rootReducer, composeWithDevTools(), applyMiddleware(sagaMiddleware));
const store = () =>{
     let store = createStore(
                    persistedReducer,
                    composeWithDevTools(applyMiddleware(sagaMiddleware))
                 ); 
     sagaMiddleware.run(IndexSagas);
     let persistor = persistStore(store)
     return { store: store, persistor: persistor }
} 

export default store;