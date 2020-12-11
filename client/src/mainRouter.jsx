import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import Container from './components/Container';
import AuthRouter from './routes/authRouter';
import PrivateRoute from './routes/secureRoutes';
import Header from './components/Header';
import HomeRoute from './routes/homeRouter';
import isAuth from './redux/actions';

function MainRouter() {
  useSelector((state) => state.auth.auth);
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  if (token !== null) {
    dispatch(isAuth());
  }
  return (
    <div>
      <Header />
      <ToastContainer />
      <HomeRoute path="/" />
      <Switch>
        <Route path="/auth" component={AuthRouter} />
        <PrivateRoute path="/items" component={Container} />
      </Switch>
    </div>
  );
}

export default MainRouter;
