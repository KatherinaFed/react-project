import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Users.module.css';

import userPhoto from '../../assets/images/users.png';

// Чистый презентационный компонент
const User = (props) => {
  const {
    user,
    followThunk,
    unfollowThunk,
    followingInProgress,
  } = props;

  return (
    <div key={user.id}>
      <span>
        <div>
          <NavLink to={`/profile/${user.id}`}>
            <img
              src={user.photos.small !== null ? user.photos.small : userPhoto}
              className={css.img}
              alt=""
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollowThunk(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                followThunk(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
      </span>
    </div>
  );
};

export default User;
