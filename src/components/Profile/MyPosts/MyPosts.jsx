import React from 'react';
import css from './MyPosts.module.css';

import Post from './Post/Post';
import {
  addPostCreator,
  updatePostTextCreator,
} from './../../../redux/profileReducer';

const MyPosts = ({ posts, newText, addPost, updateNewPostText }) => {
  // debugger
  const postsElements = posts.map(({ id, message, likes }) => (
    <Post message={message} likes={likes} id={id} />
  ));

  const textInput = React.createRef();

  const onAddPost = () => {
    addPost();
  };

  const onPostChange = () => {
    const text = textInput.current.value;

    updateNewPostText(text);
  };

  return (
    <div className={css.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={textInput} value={newText} />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
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
