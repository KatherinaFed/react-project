import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';

import Header from './Header';
import BASE_URL from '../common/baseURL/baseURL';
import { setUserAuthData } from '../../redux/authReducer';

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`${BASE_URL}/auth/me`, { withCredentials: true })
      .then(({ data }) => {
        if (data.resultCode === 0) {
          const { id, email, login } = data.data;
          this.props.setUserAuthData(id, email, login);
        }
      });
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { setUserAuthData })(HeaderContainer);
