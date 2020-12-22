import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from './components/Container';
import AuthRouter from './routes/authRouter';
import PrivateRoute from './routes/secureRoutes';
import Header from './components/Header';
import HomeRoute from './routes/homeRouter';
import useToken from './redux/hook/useToken';
import NotificationService from './screens/service';

function MainRouter() {
  const { mainLogin } = useToken();
  const { error } = useToken();
  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token);
    if (token) {
      mainLogin(token);
    }
  }, []);

  if (error) {
    NotificationService.error(error.message);
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
