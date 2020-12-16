import { combineReducers } from 'redux';
import authReducer from './Reducers/authReducer';
import colorsReducer from './Reducers/colorsReducer';
import itemsReducer from './Reducers/itemsReducer';

const rootReducer = combineReducers({ // набор reducers нашего приложения
  auth: authReducer,
  colors: colorsReducer,
  items: itemsReducer,
});

export default rootReducer;
