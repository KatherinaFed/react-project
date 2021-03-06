import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';

const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likes: 15 },
        { id: 2, message: 'My first post', likes: 20 },
      ],
      newPostText: '',
    },
    dialogsPage: {
      dialogs: [
        {
          id: 1,
          name: 'Ekaterina',
          img:
            'https://cdn.imgbin.com/10/14/1/imgbin-female-avatar-best-yYYaN63pH07CPxi6N6b1MeiDR.jpg',
        },
        {
          id: 2,
          name: 'Dima',
          img:
            'https://evasailing.com/templates/rt_sienna/custom/images/boy-512.png',
        },
        {
          id: 3,
          name: 'Grisha',
          img:
            'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png',
        },
        {
          id: 4,
          name: 'Vika',
          img:
            'https://png.pngtree.com/png-vector/20190221/ourmid/pngtree-female-user-vector-avatar-icon-png-image_691518.jpg',
        },
      ],
      messages: [
        { id: 1, message: 'Hi! What`s up?' },
        { id: 2, message: 'I`m fine, I got a job!)' },
        { id: 3, message: 'Congratulations!' },
      ],
      newMessageText: '',
    },
    sidebarFriends: {
      friends: [
        {
          id: 1,
          name: 'John',
          img:
            'https://w7.pngwing.com/pngs/409/621/png-transparent-computer-icons-avatar-male-user-profile-others-logo-monochrome-silhouette.png',
        },
        {
          id: 2,
          name: 'Mia',
          img:
            'https://cdn6.aptoide.com/imgs/f/4/c/f4c2d35ee761f9be3bbeff8750d67c63_icon.png',
        },
        {
          id: 3,
          name: 'Margaret',
          img:
            'https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png',
        },
      ],
    },
  },
  _callSubscriber() {
    console.log('State changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  _addPost() {
    const newItem = {
      id: 3,
      message: this._state.profilePage.newPostText,
      likes: 2,
    };

    this._state.profilePage.posts.push(newItem);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  _updatePostText(text) {
    this._state.profilePage.newPostText = text;
    this._callSubscriber(this._state);
  },
  _addMessage() {
    const newItem = {
      id: 3,
      message: this._state.dialogsPage.newMessageText,
    };

    this._state.dialogsPage.messages.push(newItem);
    this._state.dialogsPage.newMessageText = '';
    this._callSubscriber(this._state);
  },
  _updateMessage(text) {
    this._state.dialogsPage.newMessageText = text;
    this._callSubscriber(this._state);
  },

  // DISPATCH
  dispatch(action) {
    // debugger
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebarFriends = sidebarReducer(this._state.sidebarFriends. action);
    
    this._callSubscriber(this._state);
  },
};

export default store;
