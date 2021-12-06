import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
} from './../../redux/usersReducer';

import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import BASE_URL from '../common/baseURL/baseURL';

// Контейнерный компонент API уровня
class UsersContainer extends React.Component {
  // все side effects происходят здесь
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `${BASE_URL}/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then(({ data }) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
  }

  onPageChanged = (numberPage) => {
    this.props.setCurrentPage(numberPage);
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count=${this.props.pageSize}`
      )
      .then(({ data }) => {
        // debugger
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
})(UsersContainer);
