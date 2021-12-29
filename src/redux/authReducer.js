import { authAPI } from '../api/api';

const SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_AUTH_DATA:
      return {
        ...state,
        ...action.payload,
      };
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

// THUNK-FUNCTIONS
export const getAuthUserDataThunk = () => async (dispatch) => {
  const response = await authAPI.authMe();

  if (response.resultCode === 0) {
    const { id, email, login } = response.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login = (email, password, rememberMe, setStatus) => async (dispatch) => {
  const response = await authAPI.login(email, password, rememberMe);

  if (response.resultCode === 0) {
    dispatch(getAuthUserDataThunk());
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

export default authReducer;
