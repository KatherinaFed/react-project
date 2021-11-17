import React from 'react';
import css from './../Dialogs.module.css';
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

export default DialogItem;
