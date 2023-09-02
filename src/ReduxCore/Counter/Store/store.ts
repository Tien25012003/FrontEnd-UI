import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from '../Reducers/RootReducer';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from '../Sagas/index';
const sagaMiddleware = createSagaMiddleware();
//export const store = createStore(rootReducer, applyMiddleware(thunk));
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
