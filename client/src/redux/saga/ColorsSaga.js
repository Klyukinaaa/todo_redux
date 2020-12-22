import { takeEvery, put } from 'redux-saga/effects';
import { ASYNC_ACTIVATE_REQ, ASYNC_ACTIVATE_ERR } from '../types/types';
import { activate } from '../actions/sucActions';

function* workerActive(action) {
  try {
    const color = action.payload;
    yield put(activate(color));
  } catch (e) {
    const message = e.response.data;
    const code = e.response.status;
    yield put({
      type: ASYNC_ACTIVATE_ERR,
      payload: {
        message, code,
      },
    });
  }
}

export default function* watchActive() {
  yield takeEvery(ASYNC_ACTIVATE_REQ, workerActive);
}
