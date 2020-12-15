import { LOGIN, LOGOUT, ACTIVE } from './types';

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
    type: ACTIVE,
    payload: {
      color,
    },
  };
}
