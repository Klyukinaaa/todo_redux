import {
  LOGIN, LOGOUT, ACTIVATE, INITIALIZE_ITEMS, CREATE_ITEM, CHECK_ITEM,
  DELETE_ITEM, UPDATE_ITEM,
} from '../types/types';

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

export function initialize(data) {
  return {
    type: INITIALIZE_ITEMS,
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
    type: CHECK_ITEM,
    payload: {
      id,
    },
  };
}

export function deleted(id) {
  return {
    type: DELETE_ITEM,
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
