import {
  takeEvery, put, call, select,
} from 'redux-saga/effects';
import {
  ASYNC_LOAD_DATA, ASYNC_DELETE_TASK, ASYNC_CREATE_TASK, ASYNC_CHECK_TASK,
} from '../types/types';
import {
  initialize, deleted, create, check,
} from '../actions/actions';
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

function* workerCreateTask(action) {
  try {
    const token = yield select((state) => state.auth.token);
    const item = action.payload;
    const data = yield call(ItemsService.createItem, token, item);
    yield put(create(data.data));
  } catch (e) {
    const message = 'Not Found';
    NotificationService.error(message);
  }
}
function* workerCheckTask(action) {
  try {
    const token = yield select((state) => state.auth.token);
    const items = yield select((state) => state.items.items);
    const id = action.payload;
    const item = items.find((el) => el.id === id);
    yield put(check(id));
    yield call(ItemsService.patchItem, token, id, item);
  } catch (e) {
    const message = 'Not Found';
    NotificationService.error(message);
  }
}

export default function* watchLoadData() { // за какими actions следим и как будем реагировать
  yield takeEvery(ASYNC_LOAD_DATA, workerLoadData);
  yield takeEvery(ASYNC_DELETE_TASK, workerDeleteTask);
  yield takeEvery(ASYNC_CREATE_TASK, workerCreateTask);
  yield takeEvery(ASYNC_CHECK_TASK, workerCheckTask);
}
