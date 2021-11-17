import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import css from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  const { posts } = props;
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={posts} />
    </div>
  );
};

export default Profile;
