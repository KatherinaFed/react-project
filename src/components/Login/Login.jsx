import React from 'react';
import css from './Login.module.css';

import LoginForm from './LoginForm';

const Login = (props) => {
  return (
    <div className={css.formWrapper}>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

export default Login;
