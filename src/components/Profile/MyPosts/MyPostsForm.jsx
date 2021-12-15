import React from 'react';
import { useFormik } from 'formik';

const MyPostsForm = ({ addPost }) => {
  const textInput = React.createRef();

  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      newPostText: '',
    },
    onSubmit: ({ newPostText }, { resetForm }) => {
      addPost(newPostText);

      resetForm();
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <input
            id="newPostText"
            name="newPostText"
            type="text"
            placeholder="Post your message"
            onChange={handleChange}
            ref={textInput}
            value={values.newPostText}
          />
        </div>
        <div>
          <button type="submit">Add post</button>
        </div>
      </div>
    </form>
  );
};

export default MyPostsForm;
