import React from 'react';
import css from './Dialogs.module.css';

import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = ({ dialogs, messages }) => {

  const dialogsElements = dialogs.map(({ id, name }) => (
    <DialogItem name={name} id={id} />
  ));

  const messagesElements = messages.map(({ id, message }) => (
    <Message message={message} id={id} />
  ));

  return (
    <div className={css.dialogs}>
      <div className={css.dialogsItems}>{dialogsElements}</div>
      <div className={css.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
