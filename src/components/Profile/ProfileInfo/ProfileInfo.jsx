import React from 'react';
import css from './ProfileInfo.module.css';

import Preloader from '../../common/Preloader/Preloader';
import userPhoto from '../../../assets/images/users.png';
import ProfileStatusHook from './ProfileStatusHook';

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div>
        <img src="https://images.unsplash.com/photo-1509225770129-fbcf8a696c0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFub3JhbWF8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
      </div>
      <div className={css.descriptionWrapper}>
        <div className={css.photo}>
          {profile.photos.large
          ? (<img src={profile.photos.large} alt="" />)
          : (<img src={userPhoto} alt="" />)}
        </div>
        <div className={css.descriptionContent}>
          <div>
            <h3>Status:</h3>
            <ProfileStatusHook status={status} updateStatus={updateStatus} />
          </div>
          <div>
            <h3>My name:</h3> {profile.fullName}
          </div>
          <div>
            <h3>About me:</h3>
            {profile.aboutMe}
          </div>
          <div>
            <h3>Contacts:</h3>
            <img src="https://img.icons8.com/office/30/000000/facebook-new.png" alt="" />
            <img src="https://img.icons8.com/office/30/000000/instagram-new.png" alt="" />
            <img src="https://img.icons8.com/office/30/000000/youtube-play.png" alt="" />
            <img src="https://img.icons8.com/office/30/000000/twitter.png" alt="" />
          </div>
          <div>
            <h3>I am looking for a job:</h3>
            {profile.lookingForAJob ? (
              <img src="https://img.icons8.com/office/40/000000/binoculars.png" alt="" />
            ) : (
              <img src="https://img.icons8.com/color/48/000000/man-with-money-skin-type-3.png" alt="" />
            )}
          </div>
          <div>
            <h3>Job description:</h3>
            {profile.lookingForAJobDescription}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
