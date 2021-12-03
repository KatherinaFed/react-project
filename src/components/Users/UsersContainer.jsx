import { connect } from 'react-redux';
import {
  followAction,
  unfollowAction,
  setUsers,
  setCurrentPage,
  setTotalUsersCount
} from './../../redux/usersReducer';

// import Users from './Users';
import Users from './Users';

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // диспатчим всегда результат работы action
    follow: (userId) => dispatch(followAction(userId)),
    unfollow: (userId) => dispatch(unfollowAction(userId)),
    setUsers: (users) => dispatch(setUsers(users)),
    setCurrentPage: (currentPage) => dispatch(setCurrentPage(currentPage)),
    setTotalUsersCount: (totalCount) => dispatch(setTotalUsersCount(totalCount)),
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
