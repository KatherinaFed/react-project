import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import appReducer from './appReducer';
import authReducer from './authReducer';
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
  auth: authReducer,
  app: appReducer,
});

const reduxStore = createStore(reducers, applyMiddleware(thunk));

window.reduxStore = reduxStore;
export default reduxStore;
