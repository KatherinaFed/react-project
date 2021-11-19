import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({ posts, addPost }) => {
  const postsElements = posts.map(({ id, message, likes }) => (
    <Post message={message} likes={likes} id={id} />
  ));

  const textInput = React.createRef();

  const handleAddPost = () => {
    const textValue = textInput.current.value;
    addPost(textValue);
    textInput.current.value = '';
  };

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value)
  }

  return (
    <div className={css.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={handleChange} ref={textInput}></textarea>
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
