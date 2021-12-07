import React from 'react';
import * as axios from 'axios';
import { NavLink } from 'react-router-dom';
import css from './Users.module.css';

import BASE_URL from '../common/baseURL/baseURL';
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
              {u.followed ? (
                <button
                  onClick={() => {
                    axios
                      .delete(`${BASE_URL}/follow/${u.id}`, {
                        withCredentials: true,
                        headers: {
                          'API-KEY': '3e0b2939-9c10-403f-95ed-db554510011f',
                        },
                      })
                      .then(({ data }) => {
                        if (data.resultCode === 0) {
                          unfollow(u.id);
                        }
                      });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    axios
                      .post(`${BASE_URL}/follow/${u.id}`, {},
                        {
                          withCredentials: true,
                          headers: {
                            'API-KEY': '3e0b2939-9c10-403f-95ed-db554510011f',
                          },
                        }
                      )
                      .then(({ data }) => {
                        if (data.resultCode === 0) {
                          follow(u.id);
                        }
                      });
                  }}
                >
                  Follow
                </button>
              )}
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
