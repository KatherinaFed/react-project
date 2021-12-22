import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useMatch } from 'react-router-dom';

import {
  getProfileThunk,
  getStatusThunk,
  updateStatusThunk,
} from '../../redux/profileReducer';
import Profile from './Profile';
import { withAuthNavigate } from '../../hoc/withAuthNavigate';

const ProfileContainer = (props) => {
  const {
    authorisedUserId,
    getProfileThunk,
    getStatusThunk,
    profile,
    status,
    updateStatusThunk,
  } = props;

  const profileId = useMatch('/profile/:userId/');

  let id = profileId ? profileId.params.userId : authorisedUserId

  // Аналогично componentDidMount и componentDidUpdate:
  useEffect(() => {
    const userId = id;

    getProfileThunk(userId);
    getStatusThunk(userId);
  }, [id, getProfileThunk, getStatusThunk]);

  return (
    <div>
      <Profile
        {...props}
        profile={profile}
        status={status}
        updateStatus={updateStatusThunk}
      />
    </div>
  );
};

// HOC FUNCTION
// const AuthNavigateComponent = withAuthNavigate(ProfileContainer);

// // FUNCTION
// const withRouter = () => {
//   // КОМПОНЕНТ для использования useMatch();
//   // OLD VERSION: withRouter() function;
//   const WithUrlDataContainerComponent = (props) => {
//     const match = useMatch('/profile/:userId/');
//     return <AuthNavigateComponent {...props} match={match} />;
//   };

//   return WithUrlDataContainerComponent;
// };

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorisedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, {
    getProfileThunk,
    getStatusThunk,
    updateStatusThunk,
  }),
  // withRouter,
  withAuthNavigate
)(ProfileContainer);
