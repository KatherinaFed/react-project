import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={css.nav}>
      <div className={css.item}>
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? css.active : css.item)}
        >
          Profile
        </NavLink>
      </div>
      <div className={css.item}>
        <NavLink
          to="/dialogs"
          className={({ isActive }) => (isActive ? css.active : css.item)}
        >
          Messages
        </NavLink>
      </div>
      <div className={css.item}>
        <NavLink
          to="/news"
          className={({ isActive }) => (isActive ? css.active : css.item)}
        >
          News
        </NavLink>
      </div>
      <div className={css.item}>
        <NavLink
          to="/music"
          className={({ isActive }) => (isActive ? css.active : css.item)}
        >
          Music
        </NavLink>
      </div>
      <div className={css.item}>
        <NavLink
          to="/settings"
          className={({ isActive }) => (isActive ? css.active : css.item)}
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
