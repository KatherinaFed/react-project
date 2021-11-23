import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Header from '../src/components/Header/Header';
import Navbar from '../src/components/Navbar/Navbar';

import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = ({ store, state, dispatch }) => {
  // debugger;
  const { profilePage, dialogsPage, sidebarFriends } = state;

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar state={sidebarFriends} />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/profile"
            element={
              <Profile
                profilePage={profilePage}
                dispatch={dispatch}
                newText={profilePage.newPostText}
              />
            }
          />
          <Route
            path="/dialogs/*"
            element={
              <Dialogs
                store={store}
                dialogPage={dialogsPage}
                dispatch={dispatch}
                newMessage={dialogsPage.newMessageText}
              />
            }
          />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
