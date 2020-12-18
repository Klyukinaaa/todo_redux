import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, signOut } from '../actions/sucActions';

export default function useToken() {
  const authToken = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const logIn = useCallback((token) => dispatch(login(token)), [dispatch]);
  const logOut = useCallback(() => dispatch(signOut()), [dispatch]);

  return {
    authToken,
    logIn,
    logOut,
  };
}
