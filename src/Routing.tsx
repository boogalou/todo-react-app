import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { App } from './App';
import { NotFound } from './components/NotFound';
import { Login } from './components/Auth/Login/Login';
import { Registration } from './components/Auth/Registration/Registration';

export const Routing: FC = () => {

  return (
    <>
      <Routes>
        <Route path='/home' element={ <App/> }/>
        <Route path='/registration' element={ <Registration/> }/>
        <Route path='/login' element={ <Login/> }/>
        <Route path='*' element={ <NotFound/> }/>
      </Routes>
    </>
  );
};
