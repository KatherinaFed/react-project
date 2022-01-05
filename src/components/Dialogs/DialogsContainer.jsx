import { connect } from 'react-redux';
import { compose } from 'redux';

import { sendMessage } from '../../redux/dialogsReducer';
import { withAuthNavigate } from '../../hoc/withAuthNavigate';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageText) => dispatch(sendMessage(newMessageText)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthNavigate
)(Dialogs);
