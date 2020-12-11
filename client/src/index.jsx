import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import MainRouter from './mainRouter';
import rootReducer from './redux/rootReducer';

import './index.css';

const store = createStore(rootReducer);

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
