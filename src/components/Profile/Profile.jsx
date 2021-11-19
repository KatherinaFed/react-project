import React from 'react';

import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  const { state, addPost } = props;
  const { posts } = state;
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={posts} addPost={addPost} />
    </div>
  );
};

export default Profile;
