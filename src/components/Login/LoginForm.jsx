import React from 'react';
import { useFormik, Field } from 'formik';

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

export default LoginForm;
