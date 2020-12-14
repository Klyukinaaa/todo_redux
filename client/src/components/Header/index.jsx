import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoff } from '../../redux/actions';
import './styles.css';

function Header() {
  const history = useHistory();
  const auth = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  function logout() {
    localStorage.removeItem('token');
    dispatch(logoff());
    history.push('/auth/login');
  }

  const HeaderForAuthenticated = () => (
    <div id="header">
      <div id="logo">Todo</div>
      <input onClick={logout} className="logout" type="button" value="Logout" />
    </div>
  );

  const AuthHeader = () => (
    <div id="header">
      <NavLink to="/auth/login">
        <div id="logo">Todo</div>
      </NavLink>
      <div id="login_btns">
        <NavLink to="/auth/login" activeClassName="hurray">
          <div id="log_btn">Login</div>
        </NavLink>
        <NavLink to="/auth/register" activeClassName="hurray">
          <div id="reg_btn">Register</div>
        </NavLink>
      </div>
    </div>
  );

  return auth !== null ? <HeaderForAuthenticated /> : <AuthHeader />;
}

export default Header;
