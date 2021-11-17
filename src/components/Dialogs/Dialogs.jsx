import React from 'react';
import css from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  const { name, id } = props;

  return (
    <div className={css.dialog + ' ' + css.active}>
      <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  const { message } = props;
  return <div className={css.message}>{message}</div>;
};

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: "Ekaterina" },
    { id: 2, name: "Dima" },
    { id: 3, name: "Grisha" },
    { id: 4, name: "Vika" },
  ];

  let messagesData = [
    { id: 1, message: "Hi! What`s up?" },
    { id: 2, message: "I`m fine, I got a job!)" },
    { id: 3, message: "Congratulations!" },
  ];

  return (
    <div className={css.dialogs}>
      <div className={css.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
      </div>
      <div className={css.messages}>
        <Message message={messagesData[0].message} id={messagesData[0].id} />
        <Message message={messagesData[1].message} id={messagesData[1].id} />
        <Message message={messagesData[2].message} id={messagesData[2].id} />
      </div>
    </div>
  );
};

export default Dialogs;
