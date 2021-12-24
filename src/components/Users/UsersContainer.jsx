import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import {
  followThunk,
  unfollowThunk,
  setCurrentPage,
  toggleFollowingInProgress,
  getUsersThunk,
} from './../../redux/usersReducer';
import { withAuthNavigate } from '../../hoc/withAuthNavigate';

import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {
  getCurrentPage,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers,
  getFollowingInProgress,
} from '../../redux/usersSelectors';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (currentPage) => {
    this.props.getUsersThunk(currentPage, this.props.pageSize);
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
          followThunk={this.props.followThunk}
          unfollowThunk={this.props.unfollowThunk}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose(
  withAuthNavigate,
  connect(mapStateToProps, {
    followThunk,
    unfollowThunk,
    getUsersThunk,
    setCurrentPage,
    toggleFollowingInProgress,
  })
)(UsersContainer);
