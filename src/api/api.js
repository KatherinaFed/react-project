import * as axios from 'axios';

import BASE_URL from '../components/common/baseUrl';
import API_KEY from '../components/common/apiKey';

const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'API-KEY': API_KEY,
  },
});

// USERS
export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(({ data }) => data);
  },
};

// PROFILES
export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then(({ data }) => data);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put('profile/status/', { status: status });
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append('image', photoFile);

    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};

// SUBSCRIBERS
export const subscribeAPI = {
  followUsers(userId) {
    return instance.post(`follow/${userId}`, {}).then(({ data }) => data);
  },
  unfollowUsers(userId) {
    return instance.delete(`follow/${userId}`).then(({ data }) => data);
  },
};

// IS AUTH ME
export const authAPI = {
  authMe() {
    return instance.get('auth/me').then(({ data }) => data);
  },
  login(email, password, rememberMe = false) {
    return instance
      .post('auth/login', { email, password, rememberMe })
      .then(({ data }) => data);
  },
  logout() {
    return instance.delete('auth/login').then(({ data }) => data);
  },
};
