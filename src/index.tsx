import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './index.css';
import { store } from './init/store';
import { Provider } from 'react-redux';
import { App } from './App';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <Router>
        <Switch>

          <Route path='/'>
            <App/>
          </Route>

          

        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


