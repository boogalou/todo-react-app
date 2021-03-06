import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { store } from './init/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';


ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={ store }>
        <App/>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
