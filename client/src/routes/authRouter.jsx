import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Login from '../screens/Login';
import Register from '../screens/Register';
import useToken from '../redux/hook/useToken';

function AuthRouter({ match }) {
  const { authToken } = useToken();
  if (authToken !== null) {
    return <Redirect to="/items" />;
  }
  return (
    <Switch>
      <Route exact path={`${match.path}/login`} component={Login} />
      <Route exact path={`${match.path}/register`} component={Register} />
    </Switch>
  );
}

AuthRouter.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default AuthRouter;
