import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import MainRouter from './mainRouter';
import rootReducer from './redux/rootReducer';
import watchLoadData from './redux/saga/sagas';

import './index.css';

// создаем saga
const saga = createSagaMiddleware();
// монтируем его в хранилище
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(saga),
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

saga.run(watchLoadData);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

function App() {
  return (
    <Router>
      <MainRouter />
    </Router>
  );
}

ReactDOM.render(
  app,
  document.getElementById('root'),
);
