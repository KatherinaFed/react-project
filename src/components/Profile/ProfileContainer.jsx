import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';

import {
  addPostCreator,
  setUserProfile,
  updatePostTextCreator,
} from '../../redux/profileReducer';
import BASE_URL from '../common/baseURL/baseURL';
import Profile from './Profile';

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios.get(`${BASE_URL}/profile/2`).then(({ data }) => {
      // debugger
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

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
