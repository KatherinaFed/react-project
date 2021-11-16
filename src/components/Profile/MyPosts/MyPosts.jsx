import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className="posts">
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove post</button>
      </div>
      <Post message="Hi, how are you?" likes="15" />
      <Post message="My first post" likes="20" />
    </div>
  );
};

export default MyPosts;
