import { connect } from 'react-redux';
import {
  followAction,
  unfollowAction,
  setUsers,
} from './../../redux/usersReducer';

import Users from './Users';

const mapStateToProps= (state) => {
  return {
    users: state.usersPage.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // диспатчим всегда результат работы action
    follow: (userId) => dispatch(followAction(userId)), 
    unfollow: (userId) => dispatch(unfollowAction(userId)),
    setUsers: (users) => dispatch(setUsers(users)),
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer
