import React, { FC } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Body } from './components/Body/Body';
import { Footer } from './components/Footer/Footer';



export const App: FC = ({}) => {
  return (
    <div id="app-container" className="app-container">
      <Header />

      <Body/>

      <Footer/>
    </div>

  );
};




