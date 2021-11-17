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
  return (
    <div className={css.dialogs}>
      <div className={css.dialogsItems}>
        <DialogItem name="Ekaterina" id="1" />
        <DialogItem name="Dima" id="2" />
        <DialogItem name="Grisha" id="2" />
        <DialogItem name="Vika" id="4" />
      </div>
      <div className={css.messages}>
        <Message message="Hi! What`s up?" />
        <Message message="I`m fine, I got a job!)" />
        <Message message="Congratulations!" />
      </div>
    </div>
  );
};

export default Dialogs;
