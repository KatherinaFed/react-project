import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useMatch } from 'react-router-dom';

import { getProfileThunk } from '../../redux/profileReducer';
import Profile from './Profile';
import { withAuthNavigate } from '../../hoc/withAuthNavigate';

const MY_ID = '21114';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match ? this.props.match.params.userId : MY_ID;
    this.props.getProfileThunk(userId);
  }

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
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
});

export default compose(
  connect(mapStateToProps, { getProfileThunk }),
  withRouter,
  withAuthNavigate
)(ProfileContainer);
