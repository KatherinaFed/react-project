import React from 'react';
import './App.css';

import Header from '../src/components/Header/Header';
import Navbar from '../src/components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      {/* <Profile /> */}
      <div className="app-wrapper-content">
        <Dialogs />
      </div>
    </div>
  );
};

export default App;
