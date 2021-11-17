import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { dialogsData, messagesData, postsData } from './data'

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogsData} messages={messagesData} posts={postsData} />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
