import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { LOAD_DATA } from './types/types';
import { initialize } from './actions/actions';
import NotificationService from '../screens/service';

function getItems() {
  return axios.get('/items/', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
}

function* workerLoadData() {
  try {
    const data = yield call(getItems);
    yield put(initialize(data.data));
  } catch (e) {
    const message = 'Not Found';
    NotificationService.error(message);
  }
}

export default function* watchLoadData() { // за какими actions следим и как будем реагировать
  yield takeEvery(LOAD_DATA, workerLoadData);
}
