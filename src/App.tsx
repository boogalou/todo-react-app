import React, { FC, useEffect } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Body } from './components/Body/Body';
import { Footer } from './components/Footer/Footer';
import { useAppDispatch, useAppSelector } from './hooks/reduxHooks';
import { checkAuth, getAllTodos } from './actions';
import { Login } from './components/Auth/Login/Login';


export const App: FC = ({}) => {

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth());
    }
  }, []);

  return (
    <>
      { !localStorage.getItem('token') ? <Login/> :
        <div id="app-container" className="app-container">
          <Header/>
          <Body/>
          <Footer/>
        </div>
      }
    </>
  );
};




