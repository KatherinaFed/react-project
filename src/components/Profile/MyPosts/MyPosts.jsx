import React from 'react';
import css from './MyPosts.module.css';

import Post from './Post/Post';
import {
  addPostCreator,
  updatePostTextCreator,
} from './../../../redux/store';

const MyPosts = ({ posts, dispatch, newText }) => {
  // debugger
  const postsElements = posts.map(({ id, message, likes }) => (
    <Post message={message} likes={likes} id={id} />
  ));

  const textInput = React.createRef();

  const handleAddPost = () => {
    dispatch(addPostCreator());
  };

  const handleChange = () => {
    const text = textInput.current.value;

    dispatch(updatePostTextCreator(text));
  };

  return (
    <div className={css.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={handleChange} ref={textInput} value={newText} />
        </div>
        <div>
          <button onClick={handleAddPost}>Add post</button>
        </div>
        <div>
          <button>Remove post</button>
        </div>
      </div>
      <div className={css.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
