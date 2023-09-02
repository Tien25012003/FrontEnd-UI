import {call, put, takeEvery} from 'redux-saga/effects';
import {CounterActionType, MULTIPLY_SAGA, multiply} from '../Actions';

export function* increaseWithSaga(action: CounterActionType) {
  //console.log('from saga');
  try {
    const response = yield call(fetch, 'https://dummyjson.com/products');
    const result = yield response.json();
    //console.log(result);
    yield put(multiply(result.limit));
  } catch (e) {
    console.log(e);
  }
  //yield put(multiply(action.payload!));
}
export function* rootSaga() {
  yield takeEvery(MULTIPLY_SAGA, increaseWithSaga);
}
