import React from 'react';

import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const ProfileMemo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {
  console.log('RENDER');
  return (
    <div>
      <ProfileInfo
        isOwner={isOwner}
        profile={profile}
        status={status}
        updateStatus={updateStatus}
        savePhoto={savePhoto}
        saveProfile={saveProfile}
      />
      <MyPostsContainer />
    </div>
  );
};

const Profile = React.memo(ProfileMemo);

export default Profile;
