const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

const profileReducer = (state, action) => {
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
