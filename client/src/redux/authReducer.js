import IS_AUTH from './types';

const initialState = {
  auth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_AUTH:
      return { ...state, auth: action.payload };
    default: return state;
  }
};

export default authReducer;
