import React from 'react';
// import css from './Login.module.css';
import { useFormik } from 'formik';

import * as Yup from 'yup';

const LoginForm = ({ login }) => {
  const initialValues = {
    email: '',
    password: '',
    rememberMe: false,
  };

  const logInSchema = Yup.object().shape({
    login: Yup.string().min(4).max(10).required(),
    password: Yup.string().min(4).max(10).required(),
  });

  const onSubmit = ({ email, password, rememberMe }) => {
    login(email, password, rememberMe);
  };

  const { handleChange, handleSubmit, values } = useFormik({
    initialValues,
    logInSchema,
    onSubmit: (values) => onSubmit(values),
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <input
          id="email"
          type="text"
          name="email"
          placeholder="E-mail"
          value={values.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-control">
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
        />
      </div>
      <div className="form-control">
        <input
          id="rememberMe"
          type="checkbox"
          name="rememberMe"
          value={values.rememberMe}
        />
        <label htmlFor="rememberMe">Remember me</label>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
