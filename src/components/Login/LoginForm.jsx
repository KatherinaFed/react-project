import React, { useState } from 'react';
import css from './Login.module.css';
import { useFormik } from 'formik';

import {
  Button,
  Box,
  Checkbox,
  Container,
  CssBaseline,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  Input,
  OutlinedInput,
  Typography,
} from '@mui/material';

import * as Yup from 'yup';

const LoginForm = ({ login, captcha }) => {
  const [checked, setChecked] = useState(false);

  const handleChecked = (e) => {
    setChecked(e.target.checked);
  };

  const initialValues = {
    email: '',
    password: '',
    rememberMe: false,
    captcha: '',
  };

  const logInSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
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
      const newValues = {
        email: values.email,
        password: values.password,
        rememberMe: checked,
        captcha: values.captcha,
      };

      onSubmit(newValues, setSubmitting, setStatus);
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <CssBaseline />
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ p: 1, mt: 1 }}
        >
          <FormControl margin="normal" required fullWidth size="small">
            <InputLabel htmlFor="email">E-mail</InputLabel>
            <OutlinedInput
              id="email"
              name="email"
              type="text"
              value={values.email}
              onChange={handleChange}
              label="email"
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth size="small">
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              id="password"
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              label="password"
            />
          </FormControl>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  checked={checked}
                  onChange={handleChecked}
                />
              }
              label="Remember me"
            />
          </FormGroup>

          <div>{captcha && <img src={captcha} alt="captcha" />}</div>
          <div>
            {captcha && (
              <FormControl margin="normal" required fullWidth>
                <Input
                  id="captcha"
                  name="captcha"
                  placeholder="Put the symbols from image"
                  type="text"
                  value={values.captcha}
                  onChange={handleChange}
                />
              </FormControl>
            )}
          </div>
          <div className={css.error}>{status}</div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign in
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;
