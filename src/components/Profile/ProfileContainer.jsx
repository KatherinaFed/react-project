import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useParams } from 'react-router-dom';

import {
  getProfileThunk,
  getStatusThunk,
  updateStatusThunk,
  savePhotoThunk,
  saveProfileThunk
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
    savePhotoThunk,
    saveProfileThunk
  } = props;

  let id = useParams().id;

  if (!id) {
    id = authorisedUserId;
  }

  // Аналогично componentDidMount и componentDidUpdate:
  useEffect(() => {
    getProfileThunk(id);
    getStatusThunk(id);
  }, [id, getProfileThunk, getStatusThunk]);

  return (
    <div>
      <Profile
        {...props}
        isOwner={!useParams().id}
        profile={profile}
        status={status}
        updateStatus={updateStatusThunk}
        savePhoto={savePhotoThunk}
        saveProfile={saveProfileThunk}
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
    savePhotoThunk,
    saveProfileThunk,
  }),
  // withRouter,
  withAuthNavigate
)(ProfileContainer);
