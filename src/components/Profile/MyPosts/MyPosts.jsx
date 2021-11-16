import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove post</button>
      </div>
      <div className={css.post}>
        <Post message="Hi, how are you?" likes="15" />
        <Post message="My first post" likes="20" />
      </div>
    </div>
  );
};

export default MyPosts;
