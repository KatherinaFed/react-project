import React from 'react';
import css from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/users.png';

class Users extends React.Component {
  // все side effects происходят здесь
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then(({ data }) => {
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
  }

  onPageChanged = (numberPage) => {
    this.props.setCurrentPage(numberPage);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count=${this.props.pageSize}`)
      .then(({ data }) => {
        this.props.setUsers(data.items);
      });
  };

  render() {
    const pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    const pages = [];
    for (let i = 1; i <= pagesCount; i += 1) {
      pages.push(i);
    }

    return (
      <div>
        <div>
          {pages.map((p) => (
            <span
              className={this.props.currentPage === p && css.selectedPage}
              onClick={() => this.onPageChanged(p)}
            >
              {p}
            </span>
          ))}
        </div>
        {this.props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div>
                <img
                  src={u.photos.small !== null ? u.photos.small : userPhoto}
                  className={css.img}
                />
              </div>
              <div>
                {u.followed ? (
                  <button onClick={() => this.props.unfollow(u.id)}>
                    Unfollow
                  </button>
                ) : (
                  <button onClick={() => this.props.follow(u.id)}>
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
  }
}

export default Users;
