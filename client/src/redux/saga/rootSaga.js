import { all, call } from 'redux-saga/effects';
import watchLoadData from './TaskSaga';
import watchActive from './ColorsSaga';
import watchAuth from './AuthSaga';

export default function* rootSaga() {
  yield all([
    call(watchLoadData),
    call(watchActive),
    call(watchAuth),
  ]);
}
