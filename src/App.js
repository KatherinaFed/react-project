import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from '../src/components/Header/Header';
import Navbar from '../src/components/Navbar/Navbar';

import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = ({ state, dispatch }) => {
  // debugger;
  const { profilePage, dialogsPage, sidebarFriends } = state;

  return (
    <BrowserRouter>
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
                  dialogPage={dialogsPage}
                  dispatch={dispatch}
                  newMessage={dialogsPage.newMessage}
                />
              }
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
