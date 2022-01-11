import React from 'react';
import css from './Login.module.css';
import { Navigate } from 'react-router-dom';

import LoginForm from './LoginForm';

const Login = ({ isAuth, login, captcha }) => {
  if (isAuth) {
    return <Navigate to={'/profile'} />;
  }
  return (
    <div className={css.formWrapper}>
      <LoginForm login={login} captcha={captcha} />
    </div>
  );
};

export default Login;
