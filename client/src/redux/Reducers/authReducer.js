import {
  ASYNC_LOGIN_REQ,
  ASYNC_LOGIN_ERR,
  ASYNC_LOGIN_SUC,
  ASYNC_LOGOUT_REQ,
  ASYNC_LOGOUT_ERR,
  ASYNC_LOGOUT_SUC,
} from '../types/types';

const initialState = {
  token: null,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ASYNC_LOGIN_SUC:
      return {
        token: action.payload,
        loading: true,
        error: null,
      };
    case ASYNC_LOGIN_ERR: {
      const { code, message } = action.payload;
      return { ...state, loading: false, error: { message, code } };
    }
    case ASYNC_LOGIN_REQ: {
      return { ...state, loading: false, error: null };
    }
    case ASYNC_LOGOUT_SUC:
      return {
        token: null,
        loading: false,
        error: {},
      };
    case ASYNC_LOGOUT_ERR: {
      const { code, message } = action.payload;
      return { ...state, loading: false, error: { message, code } };
    }
    case ASYNC_LOGOUT_REQ: {
      return { ...state, loading: true, error: {} };
    }
    default: return state;
  }
};

export default authReducer;
