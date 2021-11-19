import React from 'react';

import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  const { profilePage, addPost, updatePostText, newText } = props;

  return (
    <div>
      <ProfileInfo />
      <MyPosts
        posts={profilePage.posts}
        addPost={addPost}
        newText={newText}
        updatePostText={updatePostText}
      />
    </div>
  );
};

export default Profile;
