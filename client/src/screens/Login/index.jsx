import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import AuthService from '../../services/AuthSerice';
import NotificationService from '../service';
import { login } from '../../redux/actions/actions';

import './styles.css';

function Login() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  async function signIn() {
    try {
      const response = await AuthService.signIn(email, password);
      const { token } = response.data;
      dispatch(login(token));
      localStorage.setItem('token', token);
      history.push('/items');
    } catch (e) {
      NotificationService.error(e.response.data.message);
    }
  }

  return (
    <div id="main">
      <div id="block-form">
        <form id="form_login" action="">
          <div className="title_form">Login</div>
          <div className="date_form">
            <div>
              <input
                className="date"
                type="email"
                name="email"
                placeholder="Email:"
                onChange={handleEmailChange}
              />
              <input
                className="date"
                type="password"
                name="password"
                placeholder="Password"
                onChange={handlePasswordChange}
              />
            </div>
          </div>
          <div className="buttons">
            <input className="btn_form" type="button" onClick={signIn} value="Login" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
