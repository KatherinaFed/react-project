import React from 'react';
import { Navigate } from 'react-router-dom';
import css from './Dialogs.module.css';

import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = ({ sendMessage, updateNewMessageBody, dialogsPage, isAuth }) => {

  const dialogsElements = dialogsPage.dialogs.map(({ id, name, img }) => (
    <DialogItem name={name} key={id} id={id} img={img} />
  ));

  const messagesElements = dialogsPage.messages.map(({ id, message }) => (
    <Message message={message} key={id} id={id} />
  ));

  const textInput = React.createRef();

  const onSendMessageClick = () => {
    sendMessage();
  };

  const onNewMessageChange = (e) => {
    const body = e.target.value;

    updateNewMessageBody(body);
  };

  return (
    <div className={css.dialogs}>
      <div className={css.dialogsItems}>{dialogsElements}</div>
      <div className={css.messages}>
        <div>{messagesElements}</div>
        <div>
          <textarea
            placeholder="Enter your message"
            onChange={onNewMessageChange}
            ref={textInput}
            value={dialogsPage.newMessageText}
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
