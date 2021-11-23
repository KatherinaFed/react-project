import React from 'react';
import css from './Dialogs.module.css';

import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from './../../redux/store';

const Dialogs = ({ store, dispatch }) => {
  const state = store.getState().dialogsPage;

  const dialogsElements = state.dialogs.map(({ id, name, img }) => (
    <DialogItem name={name} id={id} img={img} />
  ));

  const messagesElements = state.messages.map(({ id, message }) => (
    <Message message={message} id={id} />
  ));

  const textInput = React.createRef();

  const onSendMessageClick = () => {
    // debugger
    dispatch(sendMessageCreator());
  };

  const onNewMessageChange = (e) => {
    const body = e.target.value;

    dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <div className={css.dialogs}>
      <div className={css.dialogsItems}>{dialogsElements}</div>
      <div className={css.messages}>
        <div>{messagesElements}</div>
        <div>
          <textarea
            onChange={onNewMessageChange}
            ref={textInput}
            value={state.newMessageText}
          />
        </div>
        <div>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
