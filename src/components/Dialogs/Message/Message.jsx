import React from 'react';
import css from './../Dialogs.module.css';

const Message = (props) => {
  const { message } = props;
  return <div className={css.message}>{message}</div>;
};

export default Message;
