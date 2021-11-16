import React from 'react';
import css from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
  return (
    <div className={css.dialogs}>
      <div className={css.dialogsItems}>
        <div className={css.dialog + ' ' + css.active}>
          <NavLink to="/dialogs/1">Ekaterina</NavLink>
        </div>
        <div className={css.dialog}>
          <NavLink to="/dialogs/2">Dima</NavLink>
        </div>
        <div className={css.dialog}>
          <NavLink to="/dialogs/3">Grisha</NavLink>
        </div>
        <div className={css.dialog}>
          <NavLink to="/dialogs/4">Vika</NavLink>
        </div>
      </div>
      <div className={css.messages}>
        <div className={css.message}>Hi! What`s up?</div>
        <div className={css.message}>I`m fine, I got a job!)</div>
        <div className={css.message}>Congratulations!</div>
      </div>
    </div>
  );
};

export default Dialogs;
