import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './styles.css';
import useToken from '../../redux/hook/useToken';

function Header() {
  const history = useHistory();
  const { authToken, logOut } = useToken();

  function logout() {
    localStorage.removeItem('token');
    logOut();
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

  return authToken !== null ? <HeaderForAuthenticated /> : <AuthHeader />;
}

export default Header;
