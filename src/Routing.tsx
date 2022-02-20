import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { App } from './App';
import { Login } from './components/Auth/Login/Login';
import { Registration } from './components/Auth/Registration/Registration';


export const Routing: FC = () => {
  return (

      <Routes>
        <Route path="/" element={ <App /> }/>
        <Route path="/login" element={ <Login /> }/>
        <Route path="/registration" element={ <Registration /> }/>
      </Routes>

  );
};
