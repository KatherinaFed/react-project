const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

const initialState = {
  users: [
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          // если ID из нашего state === ID из action (action creator)
          if (u.id === action.userId) {
            // возвращаем копию того ключа, который мы меняем
            return { ...u, isFollow: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          // если ID из нашего state === ID из action (action creator)
          if (u.id === action.userId) {
            // возвращаем копию того ключа, который мы меняем
            return { ...u, isFollow: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        // добавляем новых юзеров, которые к нам пришли в старый массив с пользователями
        // [...state.users] - старые пользователи, [...action.users] - новые пользователи
        users: [...state.users, ...action.users],
      };
    default:
      return state;
  }
};

export const followAction = (userId) => ({
  type: FOLLOW,
  userId,
});

export const unfollowAction = (userId) => ({
  type: UNFOLLOW,
  userId,
});

export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});

export default usersReducer;
