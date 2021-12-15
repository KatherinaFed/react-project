import React from 'react';
import css from './Login.module.css';
import { useFormik } from 'formik';

import { logInSchema } from '../../utils/validators';

const LoginForm = (props) => {
  const { handleChange, handleSubmit, values, errors, touched } = useFormik({
    initialValues: {
      login: '',
      password: '',
      rememberMe: false,
    },
    validationSchema: logInSchema,
    onSubmit: (values, { setSubmitting }) => {
      console.log(values);
    },
  });

  console.log(errors);

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
          required
        />
        {errors && <div className={css.error}>{errors.login}</div>}
      </div>
      <div>
        <input
          onChange={handleChange}
          type="text"
          id="password"
          name="password"
          placeholder="Password"
          value={values.password}
          required
        />
        {errors && <div className={css.error}>{errors.password}</div>}
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

export default LoginForm;
