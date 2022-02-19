import React, { FC, useEffect } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Body } from './components/Body/Body';
import { Footer } from './components/Footer/Footer';
import { useAppDispatch, useAppSelector } from './hooks/reduxHooks';
import { checkAuth } from './actions';
import { AppState } from './init/store';
import { Login } from './components/Auth/Login/Login';


export const App: FC = ({}) => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth());
    }
  }, []);

  const isAuth = useAppSelector((state: AppState) => state.auth.isAuth)

  return (
    <>
      {!isAuth ? <Login /> :
      <div id="app-container" className="app-container">
        <Header/>
        <Body/>
        <Footer/>
      </div>}
    </>
  );
};




