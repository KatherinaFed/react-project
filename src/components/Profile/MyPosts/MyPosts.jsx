import React from 'react';
import css from './MyPosts.module.css';

import MyPostsForm from './MyPostsForm';
import Post from './Post/Post';

const MyPosts = (props) => {
  const postsElements = props.posts.map(({ id, message, likes }) => (
    <Post key={id} message={message} likes={likes} id={id} />
  ));
  
  return (
    <div className={css.postsBlock}>
      <h3>My posts</h3>
      <MyPostsForm {...props} />
      <div className={css.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
