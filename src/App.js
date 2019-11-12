import React from 'react';
// import logo from './assemblerslogo.svg';
// import './App.css';
import Navbar from './components/navigation/Navbar.js'
import Footer from './components/main/Footer.js'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Footer />
    </BrowserRouter>


  );
}

export default App;
