const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_BODY = 'UPDATE-MESSAGE-BODY';

const initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEND-MESSAGE':
      const newItem = {
        id: 3,
        message: state.newMessageText,
      };

      state.messages.push(newItem);
      state.newMessageText = '';
      break;
    case 'UPDATE-MESSAGE-BODY':
      state.newMessageText = action.body;
      break;
    default:
      return state;
  }

  return state;
};

export const sendMessageCreator = () => ({
  type: SEND_MESSAGE,
});

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_MESSAGE_BODY,
  body: body,
});

export default dialogsReducer;
