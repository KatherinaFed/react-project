import { getAuthUserDataThunk } from './authReducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

// ACTION
export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

// THUNK-FUNCTIONS
export const initializeApp = () => (dispatch) => {
  const promise = dispatch(getAuthUserDataThunk());

  // Если промисов много, то используем данный метод =>
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;
