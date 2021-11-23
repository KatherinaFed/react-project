import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import store from './redux/store';

const rerender = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={store.addPost.bind(store)}
        updatePostText={store.updatePostText.bind(store)}
        addMessages={store.addMessage.bind(store)}
        updateMessage={store.updateMessage.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

rerender(store.getState());

store.subscribe(rerender);

reportWebVitals();
