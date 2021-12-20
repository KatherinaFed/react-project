import React from 'react';
import css from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  const { id, name, img } = props;
  return (
    <div>
      <img src={img} alt="" />
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
