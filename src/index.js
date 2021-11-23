import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import state, { functions, subscribe } from './redux/state';

const rerender = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} functions={functions} />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

rerender(state, functions);

subscribe(rerender);

reportWebVitals();
