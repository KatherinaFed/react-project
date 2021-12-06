import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';

import { useMatch } from 'react-router-dom';
import { setUserProfile } from '../../redux/profileReducer';
import BASE_URL from '../common/baseURL/baseURL';
import Profile from './Profile';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match ? this.props.match.params.userId : '21114';
    axios.get(`${BASE_URL}/profile/${userId}`).then(({ data }) => {
      this.props.setUserProfile(data);
    });
  }

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

const ProfileURLMatch = (props) => {
  const match = useMatch('/profile/:userId/');
  return <ProfileContainer {...props} match={match} />;
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { setUserProfile })(ProfileURLMatch);
