import React, { FC, useEffect } from 'react';
import './App.css';
import { useAppDispatch } from './hooks/reduxHooks';
import { checkAuth } from './actions';
import { Route, Routes } from 'react-router-dom';
import { Login } from './components/Auth/Login/Login';
import { Registration } from './components/Auth/Registration/Registration';
import PrivateRoute from './hoc/ReqAuth';
import { Home } from './components/home';


export const App: FC = ({}) => {

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth());
    }
  }, []);

  return (
    <>

      <Routes>
        <Route path="/" element={
          <PrivateRoute>
            <Home/>
          </PrivateRoute>
        }/>


        <Route path="/login" element={ <Login/> }/>
        <Route path="/registration" element={ <Registration/> }/>
      </Routes>



    </>
  );
};




