const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_BODY = 'UPDATE-MESSAGE-BODY';

const dialogsReducer = (state, action) => {
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
