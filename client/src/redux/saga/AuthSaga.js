import {
  takeEvery, put, call,
} from 'redux-saga/effects';
import {
  ASYNC_LOGIN_REQ, ASYNC_LOGOUT_REQ, ASYNC_LOGIN_ERR, ASYNC_LOGOUT_ERR,
} from '../types/types';
import { login, signOut } from '../actions/sucActions';
import AuthService from '../../services/AuthSerice';

function* workerLogin(action) {
  try {
    const { email, password } = action.payload;
    const response = yield call(AuthService.signIn, email, password);
    const { token } = response.data;
    yield put(login(token));
    localStorage.setItem('token', token);
  } catch (e) {
    const { message } = e.response.data;
    const code = e.response.status;
    yield put({
      type: ASYNC_LOGIN_ERR,
      payload: {
        message, code,
      },
    });
  }
}

function* workerLogout() {
  try {
    yield put(signOut());
  } catch (e) {
    const { message } = e.response.data;
    const code = e.response.status;
    yield put({
      type: ASYNC_LOGOUT_ERR,
      payload: {
        message, code,
      },
    });
  }
}

export default function* watchAuth() {
  yield takeEvery(ASYNC_LOGIN_REQ, workerLogin);
  yield takeEvery(ASYNC_LOGOUT_REQ, workerLogout);
}
