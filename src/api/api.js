import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '3e0b2939-9c10-403f-95ed-db554510011f',
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
  getProfile(id) {
    return instance.get(`profile/${id}`).then(({ data }) => data);
  },
  followUsers(id) {
    return instance.post(`follow/${id}`, {}).then(({ data }) => data);
  },
  unfollowUsers(id) {
    return instance.delete(`follow/${id}`).then(({ data }) => data);
  },
};

export default usersAPI;
