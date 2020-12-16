import {
  LOGIN, LOGOUT, ACTIVATE, ADD_ITEMS, CREATE_ITEM, CHECKED_ITEM, DELETED_ITEM, UPDATE_ITEM,
} from './types';

export function login(token) {
  return {
    type: LOGIN,
    payload: token,
  };
}

export function signOut() {
  return {
    type: LOGOUT,
  };
}

export function activate(color) {
  return {
    type: ACTIVATE,
    payload: {
      color,
    },
  };
}

export function addData(data) {
  return {
    type: ADD_ITEMS,
    payload: data,
  };
}

export function create(data) {
  return {
    type: CREATE_ITEM,
    payload: data,
  };
}

export function checked(id) {
  return {
    type: CHECKED_ITEM,
    payload: {
      id,
    },
  };
}

export function deleted(id) {
  return {
    type: DELETED_ITEM,
    payload: {
      id,
    },
  };
}

export function update(id, text) {
  return {
    type: UPDATE_ITEM,
    payload: {
      id, text,
    },
  };
}
