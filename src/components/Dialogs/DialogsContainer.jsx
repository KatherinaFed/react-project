import { connect } from 'react-redux';

import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const mapStateToDispatch = (dispatch) => {
  return {
    sendMessage: () => dispatch(sendMessageCreator()),
    updateNewMessageBody: (body) => dispatch(updateNewMessageBodyCreator(body)),
  };
};

// connect возвращает новую контейнерную компоненту
const DialogsContainer = connect(mapStateToProps, mapStateToDispatch)(Dialogs);

export default DialogsContainer;
