import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import {Provider } from 'react-redux';
import myStore from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={myStore}>
    <App />
    </Provider>
  </React.StrictMode>
);
