import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { connect, Provider } from 'react-redux';
import './App.css';
import store from './redux/reduxStore';

// import DialogsContainer from './components/Dialogs/DialogsContainer';
// import News from './components/News/News';
// import Music from './components/Music/Music';
// import Settings from './components/Settings/Settings';
// import ProfileContainer from './components/Profile/ProfileContainer';
// import LoginContainer from './components/Login/LoginContainer';

import Navbar from '../src/components/Navbar/Navbar';
import HeaderContainer from './components/Header/HeaderContainer';
import UsersContainer from './components/Users/UsersContainer';
import Profile from './components/Profile/Profile';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';

const DialogsContainer = React.lazy(() =>
  import('./components/Dialogs/DialogsContainer')
);
const ProfileContainer = React.lazy(() =>
  import('./components/Profile/ProfileContainer')
);
const LoginContainer = React.lazy(() =>
  import('./components/Login/LoginContainer')
);

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <React.Suspense fallback={<Preloader />}>
            <Routes>
              <Route path="profile" element={<ProfileContainer />}>
                <Route path="/profile/:id" element={<Profile />} />
              </Route>
              <Route path="/dialogs" element={<DialogsContainer />} />
              <Route path="/login" element={<LoginContainer />} />
              <Route path="/users" element={<UsersContainer />} />

              {/* <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} /> */}
            </Routes>
          </React.Suspense>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

const AppContainer = connect(mapStateToProps, { initializeApp })(App);

const SamuraiApp = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default SamuraiApp;
