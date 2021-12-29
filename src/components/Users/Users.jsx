import React from 'react';

import Paginator from '../common/Paginator/Paginator';
import User from './User';

// Чистый презентационный компонент
const Users = (props) => {
  const {
    totalUsersCount,
    pageSize,
    currentPage,
    onPageChanged,
    users,
    followThunk,
    unfollowThunk,
    followingInProgress,
  } = props;

  return (
    <div>
      <Paginator
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
      />
      {users.map((user) => (
        <User
          user={user}
          followThunk={followThunk}
          unfollowThunk={unfollowThunk}
          followingInProgress={followingInProgress}
        />
      ))}
    </div>
  );
};

export default Users;
