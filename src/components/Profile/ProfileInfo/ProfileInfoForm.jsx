import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import {
  Box,
  Button,
  FormControl,
  FormGroup,
  InputLabel,
  OutlinedInput,
  FormControlLabel,
  Checkbox,
} from '@mui/material';

import ProfileStatusHook from '../ProfileInfo/ProfileStatusHook';
import { useEffect } from 'react';

const ProfileDataForm = ({
  profile,
  saveProfile,
  setEditMode,
  status,
  updateStatus,
}) => {

  const [checked, setChecked] = useState(profile.lookingForAJob);

  const handleChecked = (e) => {
    setChecked(e.target.checked);
  };

  const initialValues = {
    fullName: !profile.fullName ? '' : profile.fullName,
    aboutMe: !profile.aboutMe ? '' : profile.aboutMe,
    contacts: {
      facebook: !profile.contacts.facebook ? '' : profile.contacts.facebook,
      github: !profile.contacts.github ? '' : profile.contacts.github,
      instagram: !profile.contacts.instagram ? '' : profile.contacts.instagram,
      mainLink: !profile.contacts.mainLink ? '' : profile.contacts.mainLink,
      twitter: !profile.contacts.twitter ? '' : profile.contacts.twitter,
      vk: !profile.contacts.vk ? '' : profile.contacts.vk,
      website: !profile.contacts.website ? '' : profile.contacts.website,
      youtube: !profile.contacts.youtube ? '' : profile.contacts.youtube,
    },
    lookingForAJob: !profile.lookingForAJob ? '' : profile.lookingForAJob,
    lookingForAJobDescription: !profile.lookingForAJobDescription
      ? ''
      : profile.lookingForAJobDescription,
  };

  const validationSchema = Yup.object({
    fullName: Yup.string(),
    aboutMe: Yup.string(),
    contacts: Yup.object().shape({
      facebook: Yup.string().url(),
      github: Yup.string().url(),
      instagram: Yup.string().url(),
      mainLink: Yup.string().url(),
      twitter: Yup.string().url(),
      vk: Yup.string().url(),
      website: Yup.string().url(),
      youtube: Yup.string().url(),
    }),
    lookingForAJob: Yup.boolean(),
    lookingForAJobDescription: Yup.string(),
  });

  const { handleChange, handleSubmit, values, error } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (value, setStatus) => {
      const newValues = {
        ...value,
        lookingForAJob: checked,
      };

      saveProfile(newValues, setStatus).then(() => {
        setEditMode(false);
      });
    },
  });

  return (
    <Box
      sx={{
        marginTop: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box component="form" onSubmit={handleSubmit} noValidate>
        {/* <div>
          <h3>Status:</h3>
          <ProfileStatusHook status={status} updateStatus={updateStatus} />
        </div> */}
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="fullName">Full name</InputLabel>
          <OutlinedInput
            id="fullName"
            name="fullName"
            type="text"
            value={values.fullName}
            onChange={handleChange}
            label="fullName"
          />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="aboutMe">About me</InputLabel>
          <OutlinedInput
            id="aboutMe"
            name="aboutMe"
            type="text"
            value={values.aboutMe}
            onChange={handleChange}
            label="aboutMe"
          />
        </FormControl>
        <h3>Contacts:</h3>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key}>
              <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor={key}>{key}</InputLabel>
                <OutlinedInput
                  id={`contacts.${key}`}
                  name={`contacts.${key}`}
                  type="text"
                  value={values.contacts[key]}
                  onChange={handleChange}
                  label={key}
                />
              </FormControl>
            </div>
          );
        })}
        <h3>I am looking for a job:</h3>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={checked} onChange={handleChecked} />
            }
            label="Yes"
          />
        </FormGroup>
        <h3>Professional skills:</h3>
        <FormControl margin="normal" fullWidth>
          <OutlinedInput
            id="lookingForAJobDescription"
            name="lookingForAJobDescription"
            type="text"
            value={values.lookingForAJobDescription}
            onChange={handleChange}
          />
        </FormControl>
        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
          Save profile
        </Button>
      </Box>
    </Box>
  );
};

export default ProfileDataForm;
