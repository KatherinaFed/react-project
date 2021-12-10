import { connect } from 'react-redux';

import { sendMessage, updateNewMessageBody } from '../../redux/dialogsReducer';
import { withAuthNavigate } from '../../hoc/withAuthNavigate';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

// HOC FUNCTION
const AuthNavigateComponent = withAuthNavigate(Dialogs);

// connect возвращает новую контейнерную компоненту
export default connect(mapStateToProps, {
  sendMessage,
  updateNewMessageBody,
})(AuthNavigateComponent);
