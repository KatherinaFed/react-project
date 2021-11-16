import React from 'react';
import css from './Post.module.css';

const Post = (props) => {
  const { message, likes } = props;

  return (
    <div className={css.item}>
      <img src="https://cdn-icons-png.flaticon.com/512/194/194938.png" />
      {message}
      <div>
        <span>Like {likes}</span>
      </div>
    </div>
  );
};

export default Post;
