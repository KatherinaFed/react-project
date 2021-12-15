import * as Yup from 'yup';

// LOGIN
export const logInSchema = Yup.object().shape({
  login: Yup.string().min(4).max(10).required('Required field'),
  password: Yup.string().min(4).max(10).required('Required field'),
});

// MY POSTS
