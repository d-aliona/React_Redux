import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import store from './redux/store/store';

import {ThemeProvider} from './context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='container'>
    <Provider store={store}>
      <ThemeProvider>
          <App />
      </ThemeProvider>
    </Provider>
  </div>
);