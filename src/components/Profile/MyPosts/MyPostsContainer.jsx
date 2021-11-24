import React from 'react';

import {
  addPostCreator,
  updatePostTextCreator,
} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = ({ store }) => {
  const state = store.getState().profilePage;

  const handleAddPost = () => {
    store.dispatch(addPostCreator());
  };

  const handleChange = (text) => {
    store.dispatch(updatePostTextCreator(text));
  };

  return (
    <MyPosts
      updateNewPostText={handleChange}
      addPost={handleAddPost}
      posts={state.posts}
      newText={state.newPostText}
    />
  );
};

export default MyPostsContainer;
