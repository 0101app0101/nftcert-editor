import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/stores/store';
import App from './App';

// CSS
import './assets/css/style.css'
import './assets/css/bootstrap.min.css'

createRoot(document.getElementById('editor')).render(
  <Provider store={store}>
    <App />
  </Provider>
);