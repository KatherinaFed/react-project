import { connect } from 'react-redux';
import { compose } from 'redux';

import { sendMessage, updateNewMessageBody } from '../../redux/dialogsReducer';
import { withAuthNavigate } from '../../hoc/withAuthNavigate';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

export default compose(
  connect(mapStateToProps, { sendMessage, updateNewMessageBody, }),
  withAuthNavigate
)(Dialogs);
