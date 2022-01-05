import React from 'react';
import { useFormik } from 'formik';

// FORM
const DialogsForm = ({ sendMessage }) => {
  const textInput = React.createRef();

  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      newMessageText: '',
    },
    onSubmit: ({ newMessageText }, { resetForm }) => {
      sendMessage(newMessageText);
      
      resetForm();
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          id="newMessageText"
          name="newMessageText"
          type="text"
          placeholder="Enter your message"
          onChange={handleChange}
          ref={textInput}
          value={values.newMessageText}
        />
      </div>
      <div>
        <button type="submit">Send</button>
      </div>
    </form>
  );
};

export default DialogsForm;
