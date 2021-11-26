import React from 'react';

import {
  addPostCreator,
  updatePostTextCreator,
} from '../../../redux/profileReducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
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
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
