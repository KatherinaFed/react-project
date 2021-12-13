// import usersAPI from '../api/api';
import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

// default state
const initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likes: 15 },
    { id: 2, message: 'My first post', likes: 20 },
  ],
  newPostText: '',
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newItem = {
        id: 3,
        message: state.newPostText,
        likes: 2,
      };

      return {
        ...state,
        posts: [...state.posts, newItem],
        newPostText: '',
      };
    case UPDATE_POST_TEXT:
      return {
        ...state,
        newPostText: action.text,
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};

// ACTION CREATORS - функции, которые возвращают action (действие) -> объект { type: '', ... };
export const addPostCreator = () => ({
  type: ADD_POST,
});

export const updatePostTextCreator = (text) => ({
  type: UPDATE_POST_TEXT,
  text,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

// THUNK-FUNCTIONS
export const getProfileThunk = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};

export const getStatusThunk = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then((data) => {
      dispatch(setStatus(data.data));
    });
  };
};

export const updateStatusThunk = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};

export default profileReducer;
