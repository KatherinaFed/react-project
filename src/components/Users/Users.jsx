import React from 'react';
import css from './Users.module.css';

const Users = (props) => {
  // Данное условие является побочным эффектом функции
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        isFollow: true,
        img:
          'https://w7.pngwing.com/pngs/410/591/png-transparent-computer-icons-user-profile-avatar-icon-artwork-user-symbol-thumbnail.png',
        fullName: 'Ekaterina',
        status: 'Learning React',
        location: {
          city: 'Berlin',
          country: 'Germany',
        },
      },
      {
        id: 2,
        isFollow: false,
        img:
          'https://w7.pngwing.com/pngs/410/591/png-transparent-computer-icons-user-profile-avatar-icon-artwork-user-symbol-thumbnail.png',
        fullName: 'Vika',
        status: 'Working',
        location: {
          city: 'Moscow',
          country: 'Russia',
        },
      },
      {
        id: 3,
        isFollow: true,
        img:
          'https://w7.pngwing.com/pngs/410/591/png-transparent-computer-icons-user-profile-avatar-icon-artwork-user-symbol-thumbnail.png',
        fullName: 'Dima',
        status: 'I got a new job!!!',
        location: {
          city: 'Barcelona',
          country: 'Spain',
        },
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.img} className={css.img} />
            </div>
            <div>
              {u.isFollow 
              ? (<button onClick={() => props.unfollow(u.id)}>Unfollow</button>)
              : (<button onClick={() => props.follow(u.id)}>Follow</button>)
              }
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.city}</div>
              <div>{u.location.country}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
