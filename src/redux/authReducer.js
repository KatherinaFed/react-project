import { authAPI, securityAPI } from '../api/api';

const SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA';
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captcha: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_AUTH_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case GET_CAPTCHA_URL:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state;
  }
};

// ACTION
export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_AUTH_DATA,
  payload: {
    userId,
    email,
    login,
    isAuth,
  },
});

export const getCaptchaUrl = (captcha) => ({
  type: GET_CAPTCHA_URL,
  payload: { captcha },
})

// THUNK-FUNCTIONS
export const getAuthUserDataThunk = () => async (dispatch) => {
  const response = await authAPI.authMe();

  if (response.resultCode === 0) {
    const { id, email, login } = response.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login = (email, password, rememberMe, captcha, setStatus) => async (dispatch) => {
  const response = await authAPI.login(email, password, rememberMe, captcha);
  // debugger

  if (response.resultCode === 0) {
    dispatch(getAuthUserDataThunk());
  } else if (response.resultCode === 10) {
    dispatch(getCaptchaUrlThunk());
  } else {
    setStatus(response.messages[0]);
  }
};

export const logout = () => async (dispatch) => {
  const response = await authAPI.logout();

  if (response.resultCode === 0) {
    dispatch(setAuthUserData(initialState));
  }
};

export const getCaptchaUrlThunk = () => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl();
  const captcha = response.data.url;

  dispatch(getCaptchaUrl(captcha));
}

export default authReducer;
