import {
  ASYNC_DELETE_TASK, ASYNC_LOAD_DATA, ASYNC_CREATE_TASK, ASYNC_CHECK_TASK,
} from '../types/types';

export function loadData() {
  return {
    type: ASYNC_LOAD_DATA,
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
