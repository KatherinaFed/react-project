import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { functions, updatePostText } from './redux/state';

export const rerender = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} functions={functions} />
      {/* <App state={state} addPost={addPost} updatePostText={updatePostText} /> */}
    </React.StrictMode>,
    document.getElementById('root')
  );
};

reportWebVitals();
