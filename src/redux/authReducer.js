import usersAPI from '../api/api';

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
        ...action.data,
        isAuth: true,
      };
    default:
      return state;
  }
};

// ACTION
export const setUserAuthData = (userId, email, login) => ({
  type: SET_USER_AUTH_DATA,
  data: {
    userId,
    email,
    login,
  },
});

// THUNK-FUNCTION
export const isAuthThunk = () => {
  return (dispatch) => {
    usersAPI.authMe().then((data) => {
      if (data.resultCode === 0) {
        const { id, email, login } = data.data;
        dispatch(setUserAuthData(id, email, login));
      }
    });
  };
};

export default authReducer;
