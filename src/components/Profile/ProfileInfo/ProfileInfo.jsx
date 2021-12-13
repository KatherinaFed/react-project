import React from 'react';
import css from './ProfileInfo.module.css';

import Preloader from '../../common/Preloader/Preloader';
import userPhoto from '../../../assets/images/users.png';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = ({ profile }) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div>
        <img src="https://images.unsplash.com/photo-1509225770129-fbcf8a696c0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFub3JhbWF8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" />
      </div>
      <div className={css.descriptionWrapper}>
        <div className={css.photo}>
          {profile.photos.large ? <img src={profile.photos.large} /> : <img src={userPhoto} />}
        </div>
        <div className={css.descriptionContent}>
          <div>
            <h3>Status:</h3>
            <ProfileStatus status={"Hello my lovely friends!"} />
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
            <img src="https://img.icons8.com/office/30/000000/facebook-new.png" />
            <img src="https://img.icons8.com/office/30/000000/instagram-new.png" />
            <img src="https://img.icons8.com/office/30/000000/youtube-play.png" />
            <img src="https://img.icons8.com/office/30/000000/twitter.png" />
          </div>
          <div>
            <h3>I am looking for a job:</h3>
            {profile.lookingForAJob
            ? (<img src="https://img.icons8.com/office/40/000000/binoculars.png" />)
            : (<img src="https://img.icons8.com/color/48/000000/man-with-money-skin-type-3.png" />)
            }
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
