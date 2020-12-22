import {
  ASYNC_DELETE_TASK_REQ, ASYNC_LOAD_DATA_REQ, ASYNC_CREATE_TASK_REQ,
  ASYNC_CHECK_TASK_REQ, ASYNC_UPDATE_TASK_REQ, ASYNC_ACTIVATE_REQ,
  ASYNC_LOGIN_REQ, ASYNC_LOGOUT_REQ,
} from '../types/types';

export function loadData() {
  return {
    type: ASYNC_LOAD_DATA_REQ,
  };
}

export function asyncDelete(id) {
  return {
    type: ASYNC_DELETE_TASK_REQ,
    payload: id,
  };
}

export function asyncCreate(item) {
  return {
    type: ASYNC_CREATE_TASK_REQ,
    payload: item,
  };
}

export function asyncCheck(id) {
  return {
    type: ASYNC_CHECK_TASK_REQ,
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

export function asyncActive(color) {
  return {
    type: ASYNC_ACTIVATE_REQ,
    payload: color,
  };
}

export function asyncLogin(email, password) {
  return {
    type: ASYNC_LOGIN_REQ,
    payload: {
      email, password,
    },
  };
}

export function asyncLogout() {
  return {
    type: ASYNC_LOGOUT_REQ,
  };
}
