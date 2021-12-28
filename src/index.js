import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// Перерисовка дерева происходит в функции connect(), у нее есть свой subscriber (локальный)
window.store = store;
reportWebVitals();
