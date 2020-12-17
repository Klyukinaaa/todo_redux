import {
  takeEvery, put, call, select,
} from 'redux-saga/effects';
import { LOAD_DATA } from './types/types';
import { initialize } from './actions/actions';
import NotificationService from '../screens/service';
import ItemsService from '../services/ItemsService';

function* workerLoadData() {
  try {
    const token = yield select((state) => state.auth.token);
    const data = yield call(ItemsService.getItems, token);
    yield put(initialize(data.data));
  } catch (e) {
    const message = 'Not Found';
    NotificationService.error(message);
  }
}

export default function* watchLoadData() { // за какими actions следим и как будем реагировать
  yield takeEvery(LOAD_DATA, workerLoadData);
}
