import { combineReducers } from 'redux';
import authReducer from './authReducer';
import colorsReducer from './colorsReducer';
import itemsReducer from './itemsReducer';

const rootReducer = combineReducers({ // набор reducers нашего приложения
  auth: authReducer,
  colors: colorsReducer,
  items: itemsReducer,
});

export default rootReducer;
