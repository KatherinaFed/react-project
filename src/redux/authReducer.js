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
export const getAuthUserDataThunk = () => {
  return (dispatch) => {
    authAPI.authMe().then((data) => {
      if (data.resultCode === 0) {
        const { id, email, login } = data.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
    });
  };
};

export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe).then((data) => {
      if (data.resultCode === 0) {
        console.log(data)
        dispatch(getAuthUserDataThunk());
      }
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    authAPI.logout().then((data) => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserData(initialState));
      }
    });
  };
};

export default authReducer;
