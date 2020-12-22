import {
  ASYNC_LOGIN_SUC, ASYNC_LOGOUT_SUC, ASYNC_ACTIVATE_SUC, ASYNC_LOAD_DATA_SUC,
  ASYNC_CREATE_TASK_SUC, ASYNC_DELETE_TASK_SUC,
  ASYNC_UPDATE_TASK_SUC, ASYNC_CHECK_TASK_SUC,
} from '../types/types';

export function login(token) {
  return {
    type: ASYNC_LOGIN_SUC,
    payload: token,
  };
}

export function signOut() {
  return {
    type: ASYNC_LOGOUT_SUC,
  };
}

export function activate(color) {
  return {
    type: ASYNC_ACTIVATE_SUC,
    payload: {
      color,
    },
  };
}

export function initialize(data) {
  return {
    type: ASYNC_LOAD_DATA_SUC,
    payload: data,
  };
}

export function create(data) {
  return {
    type: ASYNC_CREATE_TASK_SUC,
    payload: data,
  };
}

export function check(id) {
  return {
    type: ASYNC_CHECK_TASK_SUC,
    payload: {
      id,
    },
  };
}

export function deleted(id) {
  return {
    type: ASYNC_DELETE_TASK_SUC,
    payload: {
      id,
    },
  };
}

export function update(id, text) {
  return {
    type: ASYNC_UPDATE_TASK_SUC,
    payload: {
      id, text,
    },
  };
}
