const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

// Стейт, который будет возвращаться по умолчанию
const initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likes: 15 },
    { id: 2, message: 'My first post', likes: 20 },
  ],
  newPostText: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD-POST':
      const newItem = {
        id: 3,
        message: state.newPostText,
        likes: 2,
      };

      state.posts.push(newItem);
      state.newPostText = '';
      break;
    case 'UPDATE-POST-TEXT':
      state.newPostText = action.text;
      break;
    default:
      return state;
  }

  return state;
};

export const addPostCreator = () => ({
  type: ADD_POST,
});

export const updatePostTextCreator = (text) => ({
  type: UPDATE_POST_TEXT,
  text: text,
});

export default profileReducer;
