import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import store from './redux/reduxStore';
import { Provider } from 'react-redux';

const rerender = () => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
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
