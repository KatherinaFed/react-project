import React from 'react';
import css from './Dialogs.module.css';

import DialogsForm from './DialogsForm';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  const dialogsElements = props.dialogsPage.dialogs.map(({ id, name, img }) => (
    <DialogItem name={name} key={id} id={id} img={img} />
  ));

  const messagesElements = props.dialogsPage.messages.map(({ id, message }) => (
    <Message message={message} key={id} id={id} />
  ));

  return (
    <div className={css.dialogs}>
      <div className={css.dialogsItems}>{dialogsElements}</div>
      <div className={css.messages}>
      <div>{messagesElements}</div>
        <DialogsForm {...props} />
      </div>
    </div>
  );
};

export default Dialogs;
