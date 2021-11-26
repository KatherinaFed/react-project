const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

// default state
const initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likes: 15 },
    { id: 2, message: 'My first post', likes: 20 },
  ],
  newPostText: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD-POST': {
      const newItem = {
        id: 3,
        message: state.newPostText,
        likes: 2,
      };

      // создаем копию объекта state, т.к. изначальный объект мы не имеем права менять
      const stateCopy = { ...state };
      stateCopy.post = [...state.posts];

      stateCopy.posts.push(newItem);
      stateCopy.newPostText = '';
      return stateCopy;
    }
    case 'UPDATE-POST-TEXT': {
      const stateCopy = { ...state };
      stateCopy.newPostText = action.text;
      return stateCopy;
    }
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
  text: text,
});

export default profileReducer;
