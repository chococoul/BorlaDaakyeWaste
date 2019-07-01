import React from 'react';
// import logo from './logo.svg';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Header from './Components/Header';

import Router from './Components/Router';
import Footer from './Components/Footer';
import Contact from './Components/Contact';

function App() {
  return (
    <>
      <Header/>
      <Router/>
      
     <Footer/>
    </>
  );
}

export default App;
