import { createStore, combineReducers } from 'redux';

import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';

// Собираем все редьюсеры
const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebarFriends: sidebarReducer,
});

const reduxStore = createStore(reducers);

export default reduxStore;
