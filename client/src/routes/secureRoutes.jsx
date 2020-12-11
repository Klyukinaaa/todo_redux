import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector((state) => state.auth.auth);
  return (
    <Route
      {...rest}
      exact
      render={(props) => (
        auth ? <Component {...props} />
          : <Redirect to="/auth/login" />
      )}
    />
  );
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};
