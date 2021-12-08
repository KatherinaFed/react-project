import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import usersAPI from '../../api/api';
import { setUserAuthData } from '../../redux/authReducer';

class HeaderContainer extends React.Component {
  componentDidMount() {
    usersAPI.authMe()
      .then((data) => {
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
