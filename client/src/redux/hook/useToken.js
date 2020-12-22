import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncLogin, asyncLogout } from '../actions/reqActions';
import { login } from '../actions/sucActions';

export default function useToken() {
  const authToken = useSelector((state) => state.auth.token);
  const error = useSelector((state) => state.auth.error);
  const loading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();

  const logIn = useCallback((email, password) => dispatch(asyncLogin(email, password)), [dispatch]);
  const logOut = useCallback(() => dispatch(asyncLogout()), [dispatch]);
  const mainLogin = useCallback((token) => dispatch(login(token)), [dispatch]);

  return {
    authToken,
    logIn,
    logOut,
    error,
    loading,
    mainLogin,
  };
}
