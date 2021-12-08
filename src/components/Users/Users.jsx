import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Users.module.css';

import usersAPI from '../../api/api';
import userPhoto from '../../assets/images/users.png';

// Чистый презентационный компонент
const Users = (props) => {
  const {
    totalUsersCount,
    pageSize,
    currentPage,
    onPageChanged,
    users,
    follow,
    unfollow,
    followingInProgress,
    toggleFollowingInProgress,
  } = props;

  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i += 1) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => (
          <span
            className={currentPage === p && css.selectedPage}
            onClick={() => onPageChanged(p)}
          >
            {p}
          </span>
        ))}
      </div>
      {users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={`/profile/${u.id}`}>
                <img
                  src={u.photos.small !== null ? u.photos.small : userPhoto}
                  className={css.img}
                />
              </NavLink>
            </div>
            <div>
              {u.followed 
                ? (<button
                    disabled={followingInProgress.some((id) => id === u.id)}
                    onClick={() => {
                      toggleFollowingInProgress(true, u.id);

                      usersAPI.unfollowUsers(u.id).then((data) => {
                       if (data.resultCode === 0) {
                          unfollow(u.id);
                        }

                        toggleFollowingInProgress(false, u.id);
                      });
                    }}>Unfollow</button>)
                : (<button
                    disabled={followingInProgress.some((id) => id === u.id)}
                    onClick={() => {
                      toggleFollowingInProgress(true, u.id);

                      usersAPI.followUsers(u.id).then((data) => {
                        if (data.resultCode === 0) {
                          follow(u.id);
                        }

                        toggleFollowingInProgress(false, u.id);
                      });
                    }}>Follow</button>)
              }
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{'u.location.city'}</div>
              <div>{'u.location.country'}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
