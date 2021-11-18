import React from 'react';
import css from './Dialogs.module.css';

import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {
  const { state } = props;
  const { dialogs, messages } = state;

  const dialogsElements = dialogs.map(({ id, name, img }) => (
    <DialogItem name={name} id={id} img={img} />
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
