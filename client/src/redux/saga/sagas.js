import {
  takeEvery, put, call, select,
} from 'redux-saga/effects';
import { ASYNC_LOAD_DATA, ASYNC_DELETE_TASK } from '../types/types';
import { initialize, deleted } from '../actions/actions';
import NotificationService from '../../screens/service';
import ItemsService from '../../services/ItemsService';

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

function* workerDeleteTask(action) {
  try {
    const token = yield select((state) => state.auth.token);
    const id = action.payload;
    yield call(ItemsService.deleteItem, token, id);
    yield put(deleted(id));
  } catch (e) {
    const message = 'Not Found';
    NotificationService.error(message);
  }
}

export default function* watchLoadData() { // за какими actions следим и как будем реагировать
  yield takeEvery(ASYNC_LOAD_DATA, workerLoadData);
  yield takeEvery(ASYNC_DELETE_TASK, workerDeleteTask);
}
