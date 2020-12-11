import { combineReducers } from 'redux';
import authReducer from './authReducer';

const rootReducer = combineReducers({ // набор reducers нашего приложения
  auth: authReducer,
});

export default rootReducer;
