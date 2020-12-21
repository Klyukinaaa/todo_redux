import {
  takeEvery, put, call, select,
} from 'redux-saga/effects';
import {
  ASYNC_LOAD_DATA_REQ, ASYNC_LOAD_DATA_ERR,
  ASYNC_DELETE_TASK_REQ, ASYNC_DELETE_TASK_ERR,
  ASYNC_CREATE_TASK_REQ, ASYNC_CREATE_TASK_ERR,
  ASYNC_CHECK_TASK_REQ, ASYNC_CHECK_TASK_ERR,
  ASYNC_UPDATE_TASK_REQ, ASYNC_UPDATE_TASK_ERR,
} from '../types/types';
import {
  initialize, deleted, create, check, update,
} from '../actions/sucActions';
import ItemsService from '../../services/ItemsService';

function* workerLoadData() {
  try {
    const token = yield select((state) => state.auth.token);
    const data = yield call(ItemsService.getItems, token);
    yield put(initialize(data.data));
  } catch (e) {
    const message = e.response.data;
    const code = e.response.status;
    yield put({
      type: ASYNC_LOAD_DATA_ERR,
      payload: {
        message, code,
      },
    });
  }
}

function* workerDeleteTask(action) {
  try {
    const token = yield select((state) => state.auth.token);
    const id = action.payload;
    yield call(ItemsService.deleteItem, token, id);
    yield put(deleted(id));
  } catch (e) {
    const message = e.response.data;
    const code = e.response.status;
    yield put({
      type: ASYNC_DELETE_TASK_ERR,
      payload: {
        message, code,
      },
    });
  }
}

function* workerCreateTask(action) {
  try {
    const token = yield select((state) => state.auth.token);
    const item = action.payload;
    const data = yield call(ItemsService.createItem, token, item);
    yield put(create(data.data));
  } catch (e) {
    const message = e.response.data;
    const code = e.response.status;
    yield put({
      type: ASYNC_CREATE_TASK_ERR,
      payload: {
        message, code,
      },
    });
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
    const message = e.response.data;
    const code = e.response.status;
    yield put({
      type: ASYNC_CHECK_TASK_ERR,
      payload: {
        message, code,
      },
    });
  }
}

function* workerUpdateTask(action) {
  try {
    const token = yield select((state) => state.auth.token);
    const items = yield select((state) => state.items.items);
    const { id, text } = action.payload;
    const item = items.find((el) => el.id === id);
    yield put(update(id, text));
    yield call(ItemsService.patchItem, token, id, item);
  } catch (e) {
    const message = e.response.data;
    const code = e.response.status;
    yield put({
      type: ASYNC_UPDATE_TASK_ERR,
      payload: {
        message, code,
      },
    });
  }
}

export default function* watchLoadData() { // за какими actions следим и как будем реагировать
  yield takeEvery(ASYNC_LOAD_DATA_REQ, workerLoadData);
  yield takeEvery(ASYNC_DELETE_TASK_REQ, workerDeleteTask);
  yield takeEvery(ASYNC_CREATE_TASK_REQ, workerCreateTask);
  yield takeEvery(ASYNC_CHECK_TASK_REQ, workerCheckTask);
  yield takeEvery(ASYNC_UPDATE_TASK_REQ, workerUpdateTask);
}
