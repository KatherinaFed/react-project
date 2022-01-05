import React from 'react';
import css from './Login.module.css';
import { Navigate } from 'react-router-dom';

import LoginForm from './LoginForm';

const Login = ({ isAuth, login }) => {
  if (isAuth) {
    return <Navigate to={'/profile'} />;
  }
  return (
    <div className={css.formWrapper}>
      <h1>Login</h1>
      <LoginForm login={login} />
    </div>
  );
};

export default Login;
