import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import useToken from '../redux/hook/useToken';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authToken } = useToken();
  return (
    <Route
      {...rest}
      exact
      render={(props) => (
        authToken !== null ? <Component {...props} />
          : <Redirect to="/auth/login" />
      )}
    />
  );
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};
