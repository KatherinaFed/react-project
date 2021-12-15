import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = ({ isAuth, login }) => {
// debugger
  return (
    <header className={css.header}>
      <img src="https://www.pikpng.com/pngl/b/88-889337_kingfisher-logo-png.png" />
      <div className={css.loginBlock}>
        {isAuth
        ? (<>
            <div>{login}</div>
            <button type="button">Logout</button>
          </>)
          : (<NavLink to="/login">Login</NavLink>)}
      </div>
    </header>
  );
};

export default Header;
