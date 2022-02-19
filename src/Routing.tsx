import React, { FC } from 'react';
import { Route, } from 'react-router-dom';
import { App } from './App';
import { Login } from './components/Auth/Login/Login';
import { Registration } from './components/Auth/Registration/Registration';


export const Routing: FC = () => {
  return (
    <>

      <Route exact path='/'>
        <App/>
      </Route>

      <Route exact path='/login'>
        <Login/>
      </Route>


      <Route exact path='registration'>
        <Registration/>
      </Route>


    </>
  );
};
