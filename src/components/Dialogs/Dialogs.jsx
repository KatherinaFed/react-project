import React from 'react';
import css from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
    <div className={css.dialogs}>
      <div className={css.dialogsItems}>
        <div className={css.dialog + ' ' + css.active}>Ekaterina</div>
        <div className={css.dialog}>Dima</div>
        <div className={css.dialog}>Grisha</div>
        <div className={css.dialog}>Vika</div>
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
