import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({ posts }) => {
  const postsElements = posts.map(({ id, message, likes }) => (
    <Post message={message} likes={likes} id={id} />
  ));

  return (
    <div className={css.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
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
