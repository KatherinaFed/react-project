import React from 'react';
import css from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/users.png';

const Users = (props) => {
  // Данное условие является побочным эффектом функции
  if (props.users.length === 0) {
    
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then(({ data }) => {
        debugger
        props.setUsers(data.items);
      });
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={css.img} />
            </div>
            <div>
              {u.isFollow ? (
                <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
              ) : (
                <button onClick={() => props.follow(u.id)}>Follow</button>
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
