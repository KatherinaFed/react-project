import React from 'react';

import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = ({ store }) => {
  const state = store.getState().dialogsPage;

  const sendMessage = () => {
    store.dispatch(sendMessageCreator());
  };

  const onMessageChangeBody = (body) => {
    store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <Dialogs
      sendMessage={sendMessage}
      updateNewMessageBody={onMessageChangeBody}
      dialogsPage={state}
    />
  );
};

export default DialogsContainer;
