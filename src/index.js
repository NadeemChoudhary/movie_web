import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux'
import { Store } from './Store/Store';
import { createStore } from 'redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={createStore(Store)}>
    <App />
  </Provider>

);

