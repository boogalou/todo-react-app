import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { NotFound } from './components/NotFound';
import { Login } from './components/Auth/Login/Login';
import { Registration } from './components/Auth/Registration/Registration';
import { ReqAuth } from './hoc/ReqAuth';

export const Routing: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <ReqAuth>
            <App/>
          </ReqAuth>
        }/>
        <Route path='/registration' element={ <Registration/> }/>
        <Route path='/login' element={ <Login/> }/>
        <Route path='*' element={ <NotFound/> }/>
      </Routes>
    </>
  );
};
