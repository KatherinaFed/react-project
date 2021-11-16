import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import css from './Profile.module.css';

const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://images.unsplash.com/photo-1509225770129-fbcf8a696c0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFub3JhbWF8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" />
      </div>
      <div>image + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
