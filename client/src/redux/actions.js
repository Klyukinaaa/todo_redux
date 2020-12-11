import IS_AUTH from './types';

function isAuth() {
  return {
    type: IS_AUTH,
    payload: true,
  };
}

export default isAuth;
