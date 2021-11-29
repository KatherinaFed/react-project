import { createStore, combineReducers } from 'redux';

import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';

// Собираем все редьюсеры
const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebarFriends: sidebarReducer,
  usersPage: usersReducer,
});

const reduxStore = createStore(reducers);

window.reduxStore = reduxStore;
export default reduxStore;
