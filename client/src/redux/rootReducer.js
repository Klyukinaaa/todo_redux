import { combineReducers } from 'redux';
import authReducer from './authReducer';
import colorsReducer from './itemsReducer';

const rootReducer = combineReducers({ // набор reducers нашего приложения
  auth: authReducer,
  items: colorsReducer,
});

export default rootReducer;
