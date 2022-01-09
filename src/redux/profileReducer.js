import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO = 'SAVE_PHOTO';
const SAVE_PROFILE = 'SAVE_PROFILE';

// default state
const initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likes: 15 },
    { id: 2, message: 'My first post', likes: 20 },
  ],
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newItem = {
        id: 3,
        message: action.newPostText,
        likes: 2,
      };

      return {
        ...state,
        posts: [...state.posts, newItem],
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
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
    case SAVE_PHOTO:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };
    case SAVE_PROFILE:
      return {
        ...state,
        profile: { ...state.profile, properties: action.profileData },
      };
    default:
      return state;
  }
};

// ACTION CREATORS - функции, которые возвращают action (действие) -> объект { type: '', ... };
export const addPostCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});

export const deletePostCreator = (postId) => ({
  type: DELETE_POST,
  postId,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const savePhoto = (photos) => ({
  type: SAVE_PHOTO,
  photos,
});

export const saveProfile = (profileData) => ({
  type: SAVE_PROFILE,
  profileData,
});

// THUNK-FUNCTIONS
export const getProfileThunk = (userId) => async (dispatch) => {
  const response = await profileAPI.getProfile(userId);
  
  dispatch(setUserProfile(response));
};

export const getStatusThunk = (userId) => async (dispatch) => {
  const response = await profileAPI.getStatus(userId);

  dispatch(setStatus(response.data));
};

export const updateStatusThunk = (status) => async (dispatch) => {
  const response = await profileAPI.updateStatus(status);

  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export const savePhotoThunk = (file) => async (dispatch) => {
  const response = await profileAPI.savePhoto(file);

  if (response.data.resultCode === 0) {
    dispatch(savePhoto(response.data.data.photos));
  }
};

export const saveProfileThunk = (profileData, setStatus) => async (
  dispatch,
  getState
) => {
  const userId = getState().auth.userId;
  const response = await profileAPI.saveProfile(profileData);

  if (response.data.resultCode === 0) {
    dispatch(getProfileThunk(userId));
  } else {
    setStatus(response.data.messages[0]);

    return Promise.reject(response.data.messages[0]);
  }
};

export default profileReducer;
