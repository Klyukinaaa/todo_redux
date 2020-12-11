import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const HomeRoute = () => {
  const auth = useSelector((state) => state.auth.auth);
  if (auth) {
    return (
      <Redirect to="/items" />
    );
  }
  return (
    <Redirect to="/auth/login" />
  );
};

export default HomeRoute;
