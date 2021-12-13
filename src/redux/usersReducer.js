import { usersAPI, subscribeAPI } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE_IS_FOLLOWING_IN_PROGRESS';

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
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
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return { ...state, users: action.users };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_COUNT:
      return { ...state, totalUsersCount: action.totalCount };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        // при нажатии на кнопку follow/unfollow кнопка юзера (id) становится недоступной (disabled)
        // и id добавляется в массив, при завершении процесса кнопка снова становится доступной
        // и id удаляется из массива;
        followingInProgress: action.isFetching
          ? // если процесс (isFetching) === true (идет) => добавляем ID пользователя в массив,
            // вместе с глубоким копированием старых данных (других ID)
            [...state.followingInProgress, action.id]
          : // если процесс (isFetching) === false (завершен) => удаляем ID пользователя из массива
            state.followingInProgress.filter((id) => id !== action.id),
      };
    default:
      return state;
  }
};

// ACTIONS
export const follow = (userId) => ({
  type: FOLLOW,
  userId,
});

export const unfollow = (userId) => ({
  type: UNFOLLOW,
  userId,
});

export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const setTotalUsersCount = (totalCount) => ({
  type: SET_TOTAL_COUNT,
  totalCount,
});

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const toggleFollowingInProgress = (isFetching, id) => ({
  type: TOGGLE_IS_FOLLOWING_IN_PROGRESS,
  isFetching,
  id,
});

// THUNK-FUNCTIONS
export const getUsersThunk = (currentPage, pageSize) => {
  // возврат функции thunk (происходит замыкание);
  return (dispatch) => {
    dispatch(toggleIsFetching(true));

    usersAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    });
  };
};

export const followThunk = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId));

    subscribeAPI.followUsers(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(follow(userId));
      }

      dispatch(toggleFollowingInProgress(false, userId));
    });
  };
};

export const unfollowThunk = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId));

    subscribeAPI.unfollowUsers(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unfollow(userId));
      }

      dispatch(toggleFollowingInProgress(false, userId));
    });
  };
};

export default usersReducer;
