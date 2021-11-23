import React from 'react';
import css from './Dialogs.module.css';

import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {
  addMessageActionCreator,
  updateMessageTextActionCreator,
} from './../../redux/store';

const Dialogs = ({ dialogPage, dispatch, newMessage }) => {
  const dialogsElements = dialogPage.dialogs.map(({ id, name, img }) => (
    <DialogItem name={name} id={id} img={img} />
  ));

  const messagesElements = dialogPage.messages.map(({ id, message }) => (
    <Message message={message} id={id} />
  ));

  const textInput = React.createRef();

  const handleAddMessage = () => {
    dispatch(addMessageActionCreator());
  };

  const handleChange = () => {
    const text = textInput.current.value;

    dispatch(updateMessageTextActionCreator(text));
  };

  return (
    <div className={css.dialogs}>
      <div className={css.dialogsItems}>{dialogsElements}</div>
      <div className={css.messages}>{messagesElements}</div>
      <div>
        <textarea onChange={handleChange} ref={textInput} value={newMessage} />
      </div>
      <div>
        <button onClick={handleAddMessage}>Add message</button>
      </div>
    </div>
  );
};

export default Dialogs;
