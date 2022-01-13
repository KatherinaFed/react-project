import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Header2 from './Header';
import { logout } from '../../redux/authReducer';

class HeaderContainer extends React.Component {
  render() {
    // return <Header {...this.props} />;
    return <Header2 {...this.props} />; 
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { logout })(
  HeaderContainer
);
