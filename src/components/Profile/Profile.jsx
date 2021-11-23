import React from 'react';

import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ profilePage, dispatch, newText }) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        posts={profilePage.posts}
        dispatch={dispatch}
        newText={newText}
      />
    </div>
  );
};

export default Profile;
