import { connect } from 'react-redux';

import { sendMessage, updateNewMessageBody } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth,
  };
};

// connect возвращает новую контейнерную компоненту
export default connect(mapStateToProps, {
  sendMessage,
  updateNewMessageBody,
})(Dialogs);
