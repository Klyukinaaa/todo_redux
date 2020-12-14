import axios from 'axios';

class AuthService {
  static signIn(email, password) {
    return axios.post('/login', {
      email,
      password,
    });
  }

  static signUp(email, password) {
    return axios.post('/register', {
      email,
      password,
    });
  }
}

export default AuthService;
