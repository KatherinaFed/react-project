import React, { useState } from 'react';
import css from './ProfileInfo.module.css';
import { Button } from '@mui/material';

import userPhoto from '../../../assets/images/users.png';
import headerUser from '../../../assets/images/headerUser.jpg';
import facebookIcon from '../../../assets/images/icons/facebook.png';
import instagramIcon from '../../../assets/images/icons/instagram.png';
import youtubeIcon from '../../../assets/images/icons/youtube.png';
import twitterIcon from '../../../assets/images/icons/twitter.png';
import githubIcon from '../../../assets/images/icons/github.png';
import vkIcon from '../../../assets/images/icons/vk.png';
import websiteIcon from '../../../assets/images/icons/website.png';
import mainLinkIcon from '../../../assets/images/icons/mainLink.png';
import lookingForAJobIcon from '../../../assets/images/icons/lookingForAJob.png';
import iHaveAJobIcon from '../../../assets/images/icons/iHaveAJob.png';

import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusHook from './ProfileStatusHook';
import ProfileDataForm from './ProfileInfoForm';

const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile,
}) => {
  const [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }

  const selectMyPhoto = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  return (
    <div>
      <div className={css.headerImage}>
        <img src={headerUser} alt="" />
      </div>
      <div className={css.descriptionWrapper}>
        <div className={css.photo}>
          <img src={profile.photos.large || userPhoto} alt="" />
        </div>
        <div className={css.file}>
          {isOwner && (
            <input type="file" onChange={selectMyPhoto} className={css.file} />
          )}
        </div>
        <div className={css.descriptionContent}>
          {editMode ? (
            <ProfileDataForm
              profile={profile}
              saveProfile={saveProfile}
              setEditMode={setEditMode}
              status={status}
              updateStatus={updateStatus}
            />
          ) : (
            <ProfileData
              isOwner={isOwner}
              profile={profile}
              setEditMode={setEditMode}
              status={status}
              updateStatus={updateStatus}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const ProfileData = ({ isOwner, profile, setEditMode, status, updateStatus }) => {
  // debugger
  return (
    <>
      {isOwner && (
        <Button onClick={() => setEditMode(true)} variant="contained">Edit profile</Button>
      )}
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
      <div className={css.contacts}>
        <h3>Contacts:</h3>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contacts
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
      <div>
        <h3>I am looking for a job:</h3>
        <LookingForAJob profile={profile} />
      </div>
      <div>
        <h3>Job description:</h3>
        {profile.lookingForAJobDescription}
      </div>
    </>
  );
};

const Contacts = ({ contactTitle, contactValue }) => {
  const icons = {
    github: githubIcon,
    vk: vkIcon,
    facebook: facebookIcon,
    instagram: instagramIcon,
    twitter: twitterIcon,
    youtube: youtubeIcon,
    mainLink: mainLinkIcon,
    website: websiteIcon,
  };

  return (
    contactValue && (
      <a href={contactValue}>
        <img src={icons[contactTitle]} alt="icon" />
      </a>
    )
  );
};

const LookingForAJob = ({ profile }) => {
  return profile.lookingForAJob ? (
    <img src={lookingForAJobIcon} alt="lookingForAJob" />
  ) : (
    <img src={iHaveAJobIcon} alt="iHaveAJob" />
  );
};

export default ProfileInfo;
