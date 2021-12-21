import React from 'react';
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

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match
      ? this.props.match.params.userId
      : this.props.authorisedUserId;
    this.props.getProfileThunk(userId);
    this.props.getStatusThunk(userId);
  }

  render() {
    return (
      <div>
        <Profile
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatusThunk}
        />
      </div>
    );
  }
}

// HOC FUNCTION
const AuthNavigateComponent = withAuthNavigate(ProfileContainer);

// FUNCTION
const withRouter = () => {
  // КОМПОНЕНТ для использования useMatch();
  // OLD VERSION: withRouter() function;
  const WithUrlDataContainerComponent = (props) => {
    const match = useMatch('/profile/:userId/');
    return <AuthNavigateComponent {...props} match={match} />;
  };

  return WithUrlDataContainerComponent;
};

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
  withRouter,
  withAuthNavigate
)(ProfileContainer);
