import {
  LOGIN, LOGOUT, ACTIVATE, ADD_DATA, CREATE, CHECKED,
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
    type: ADD_DATA,
    payload: data,
  };
}

export function create(data) {
  return {
    type: CREATE,
    payload: data,
  };
}

export function checked(item) {
  return {
    type: CHECKED,
    payload: {
      item,
    },
  };
}
