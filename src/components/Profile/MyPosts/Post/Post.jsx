import React from 'react';
import css from './Post.module.css';

const Post = () => {
  return (
    <div className={css.item}>
      <img src="https://cdn-icons-png.flaticon.com/512/194/194938.png" />
      post
      <div>
        <span>Like</span>
      </div>
    </div>
  );
};

export default Post;
