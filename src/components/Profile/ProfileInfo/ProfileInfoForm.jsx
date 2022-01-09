import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormControl from '../../common/Form/FormControl';

const ProfileDataForm = ({ profile, saveProfile, setEditMode }) => {
  // debugger
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

  const { handleChange, handleSubmit, values, status, error } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (value, setStatus) => {
      console.log(value);
      saveProfile(value, setStatus).then(() => {
        setEditMode(false);
      });
    },
  });
  console.log(values.lookingForAJob)

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Save profile</button>
      {error && <div className="error">
        Error: {status}
      </div>}
      <h3>My name:</h3>
      <FormControl
        name={"fullName"}
        placeholder={"Full name"}
        type={"text"}
        value={values.fullName}
        handleChange={handleChange}
      />
      <h3>About me:</h3>
      <FormControl
        name={"aboutMe"}
        placeholder={"About me"}
        type={"text"}
        value={values.aboutMe}
        handleChange={handleChange}
      />
      <h3>Contacts:</h3>
      {Object.keys(profile.contacts).map((key) => {
        return (
          <div key={key}>
            <b>{key}</b>
            <FormControl
              name={`contacts.${key}`}
              placeholder={key}
              type={"text"}
              value={values.contacts[key]}
              handleChange={handleChange}
            />
          </div>
        );
      })}
      <h3>I am looking for a job:</h3>
      <FormControl
        name={"lookingForAJob"}
        type={"checkbox"}
        value={values.lookingForAJob}
        handleChange={handleChange}
      />
      <label htmlFor="lookingForAJob">Yes</label>
      <h3>Professional skills:</h3>
      <FormControl
        name={'lookingForAJobDescription'}
        placeholder={'Professional skills'}
        type={'text'}
        value={values.lookingForAJobDescription}
        handleChange={handleChange}
      />
    </form>
  );
};

export default ProfileDataForm;
