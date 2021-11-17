import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  let postsData = [
    { id: 1, message: "Hi, how are you?", likes: 15 },
    { id: 2, message: "My first post", likes: 20 },
  ];

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
      <div className={css.posts}>
        <Post message={postsData[0].message} likes={postsData[0].likes} />
        <Post message={postsData[1].message} likes={postsData[1].likes} />
      </div>
    </div>
  );
};

export default MyPosts;
