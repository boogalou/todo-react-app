import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { store } from './init/store';
import { Provider } from 'react-redux';
import { Routing } from './Routing';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <Routing/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
