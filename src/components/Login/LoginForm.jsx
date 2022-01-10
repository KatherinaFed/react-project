import React from 'react';
import css from './Login.module.css';
import { useFormik } from 'formik';
import FormControl from '../common/Form/FormControl';

import * as Yup from 'yup';

const LoginForm = ({ login, captcha }) => {
  const initialValues = {
    email: '',
    password: '',
    rememberMe: false,
    captcha: '',
  };

  const logInSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required(),
    captcha: Yup.string(),
  });

  const onSubmit = (values, setSubmitting, setStatus) => {
    login(
      values.email,
      values.password,
      values.rememberMe,
      values.captcha,
      setStatus
    );

    setSubmitting(false);
  };

  const { handleChange, handleSubmit, values, status } = useFormik({
    initialValues,
    logInSchema,
    onSubmit: (values, { setSubmitting, setStatus }) => {
      onSubmit(values, setSubmitting, setStatus);
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <FormControl
        name={'email'}
        placeholder={'E-mail'}
        type={'text'}
        value={values.email}
        handleChange={handleChange}
      />
      <FormControl
        name={'password'}
        placeholder={'Password'}
        type={'password'}
        value={values.password}
        handleChange={handleChange}
      />
      <FormControl
        name={'rememberMe'}
        type={'checkbox'}
        value={values.rememberMe}
        handleChange={handleChange}
      />
      <label htmlFor="rememberMe">Remember me</label>
      <div>{captcha && <img src={captcha} alt="captcha" />}</div>
      <div>
        {captcha && (
          <FormControl
            name={'captcha'}
            placeholder={'Put the symbols from image'}
            type={'text'}
            value={values.captcha}
            handleChange={handleChange}
          />
        )}
      </div>
      <div className={css.error}>{status}</div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
