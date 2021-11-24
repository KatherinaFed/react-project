import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import store from './redux/reduxStore';

const rerender = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App store={store} state={state} dispatch={store.dispatch.bind(store)} />
    </BrowserRouter>,
    document.getElementById('root')
  );
};

rerender(store.getState());

store.subscribe(() => {
  const state = store.getState();
  rerender(state);
});

reportWebVitals();
