import {
  ASYNC_DELETE_TASK, ASYNC_LOAD_DATA_REQ, ASYNC_CREATE_TASK,
  ASYNC_CHECK_TASK, ASYNC_UPDATE_TASK_REQ,
} from '../types/types';

export function loadData() {
  return {
    type: ASYNC_LOAD_DATA_REQ,
  };
}

export function asyncDelete(id) {
  return {
    type: ASYNC_DELETE_TASK,
    payload: id,
  };
}

export function asyncCreate(item) {
  return {
    type: ASYNC_CREATE_TASK,
    payload: item,
  };
}

export function asyncCheck(id) {
  return {
    type: ASYNC_CHECK_TASK,
    payload: id,
  };
}

export function asyncUpdate(id, text) {
  return {
    type: ASYNC_UPDATE_TASK_REQ,
    payload: {
      id, text,
    },
  };
}
