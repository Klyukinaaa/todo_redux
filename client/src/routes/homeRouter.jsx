import React from 'react';
import { Redirect } from 'react-router-dom';
import useToken from '../redux/hook/useToken';

const HomeRoute = () => {
  const { authToken } = useToken();
  if (authToken != null) {
    return (
      <Redirect to="/items" />
    );
  }
  return (
    <Redirect to="/auth/login" />
  );
};

export default HomeRoute;
