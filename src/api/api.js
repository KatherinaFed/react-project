import * as axios from 'axios';

import BASE_URL from '../components/common/baseUrl';
import API_KEY from '../components/common/apiKey';

const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'API-KEY': API_KEY,
  }
});

const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(({ data }) => data);
  },
  authMe() {
    return instance.get('auth/me').then(({ data }) => data);
  },
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then(({ data }) => data);
  },
  followUsers(userId) {
    return instance.post(`follow/${userId}`, {}).then(({ data }) => data);
  },
  unfollowUsers(userId) {
    return instance.delete(`follow/${userId}`).then(({ data }) => data);
  },
};

export default usersAPI;
