import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { store } from './init/store';
import { Provider } from 'react-redux';
import { Routing } from './Routing';
import { BrowserRouter as Router, Switch } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <Router>
        <Switch>
          <Routing/>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
