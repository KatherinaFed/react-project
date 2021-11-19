import { rerender } from './../render';

const images = {
  john:
    'https://w7.pngwing.com/pngs/409/621/png-transparent-computer-icons-avatar-male-user-profile-others-logo-monochrome-silhouette.png',
  mia:
    'https://cdn6.aptoide.com/imgs/f/4/c/f4c2d35ee761f9be3bbeff8750d67c63_icon.png',
  margaret:
    'https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png',
};

const state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how are you?', likes: 15 },
      { id: 2, message: 'My first post', likes: 20 },
    ],
    newPostText: '',
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: 'Ekaterina', img: "https://cdn.imgbin.com/10/14/1/imgbin-female-avatar-best-yYYaN63pH07CPxi6N6b1MeiDR.jpg" },
      { id: 2, name: 'Dima', img: "https://evasailing.com/templates/rt_sienna/custom/images/boy-512.png" },
      { id: 3, name: 'Grisha', img: "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png" },
      { id: 4, name: 'Vika', img: "https://png.pngtree.com/png-vector/20190221/ourmid/pngtree-female-user-vector-avatar-icon-png-image_691518.jpg" },
    ],
    messages: [
      { id: 1, message: 'Hi! What`s up?' },
      { id: 2, message: 'I`m fine, I got a job!)' },
      { id: 3, message: 'Congratulations!' },
    ],
    newMessage: '',
  },
  sidebarFriends: {
    friends: [
      { id: 1, name: 'John', img: images.john },
      { id: 2, name: 'Mia', img: images.mia },
      { id: 3, name: 'Margaret', img: images.margaret },
    ],
  },
};


// ADDED POSTS IN PROFILE
export const addPost = () => {
  const newItem = {
    id: 3,
    message: state.profilePage.newPostText,
    likes:2,
  };

  state.profilePage.posts.push(newItem);
  state.profilePage.newPostText = '';
  rerender(state);
};

export const updatePostText = (text) => {
  state.profilePage.newPostText = text;
  rerender(state);
};

// MESSAGES IN DIALOGS
export const addMessage = () => {
  const newItem = {
    id: 3,
    message: state.dialogsPage.newMessage,
  };

  state.dialogsPage.messages.push(newItem);
  state.dialogsPage.newMessage = '';
  rerender(state);
};

export const updateMessage = (text) => {
  state.dialogsPage.newMessage = text;
  rerender(state);
};

export const functions = {
  addPosts: {
    post: addPost,
    updatePost: updatePostText,
  },
  addMessages: {
    message: addMessage,
    updateMessage: updateMessage,
  },
};


export default state;
