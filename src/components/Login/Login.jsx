import React from 'react';
import { useFormik } from 'formik';
import css from './Login.module.css';

const LoginForm = (props) => {
  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      login: '',
      password: '',
      rememberMe: false,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          onChange={handleChange}
          type="text"
          id="login"
          name="login"
          placeholder="Login"
          value={values.name}
        />
      </div>
      <div>
        <input
          onChange={handleChange}
          type="text"
          id="password"
          name="password"
          placeholder="Password"
          value={values.password}
        />
      </div>
      <div>
        <input
          onChange={handleChange}
          type="checkbox"
          id="rememberMe"
          name="rememberMe"
          value={values.rememberMe}
        />
        <label htmlFor="rememberMe">Remember me</label>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

const Login = (props) => {
  return (
    <div className={css.formWrapper}>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

export default Login;
