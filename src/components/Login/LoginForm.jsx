import React from 'react';
import css from './Login.module.css';
import { useFormik } from 'formik';

import * as Yup from 'yup';

const LoginForm = ({ login }) => {
  const initialValues = {
    email: '',
    password: '',
    rememberMe: false,
  };

  const logInSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(4).max(10).required(),
  });

  const onSubmit = (values, setSubmitting, setStatus) => {
    login(values.email, values.password, values.rememberMe, setStatus);

    setSubmitting(false);
  };

  const { handleChange, handleSubmit, values, status } = useFormik({
    initialValues,
    logInSchema,
    onSubmit: (values, { setSubmitting, setStatus }) => {
      console.log(values)
      onSubmit(values, setSubmitting, setStatus);
    },
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
          onChange={handleChange}
        />
        <label htmlFor="rememberMe">Remember me</label>
      </div>
      <div className={css.error}>{status}</div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
