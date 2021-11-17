import React from 'react';
import css from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  const { name, id } = props;

  return (
    <div>
      <NavLink
        className={({ isActive }) => (isActive ? css.active : css.dialogsItems)}
        to={`/dialogs/${id}`}
      >
        {name}
      </NavLink>
    </div>
  );
};

const Message = (props) => {
  const { message } = props;
  return <div className={css.message}>{message}</div>;
};

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: 'Ekaterina' },
    { id: 2, name: 'Dima' },
    { id: 3, name: 'Grisha' },
    { id: 4, name: 'Vika' },
  ];

  const dialogsElements = dialogsData.map(({ id, name }) => (
    <DialogItem name={name} id={id} />
  ));

  let messagesData = [
    { id: 1, message: 'Hi! What`s up?' },
    { id: 2, message: 'I`m fine, I got a job!)' },
    { id: 3, message: 'Congratulations!' },
  ];

  const messagesElements = messagesData.map(({ id, message }) => (
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
