import React from 'react';

import { Header } from './Header/Header';
import { Body } from './Body/Body';
import { Footer } from './Footer/Footer';


export const Home = () => {
  return (
    <>
      <div id="app-container" className="app-container">
        <Header/>
        <Body/>
        <Footer/>
      </div>
    </>
  );
};

