import React from 'react';
// import logo from './assemblerslogo.svg';
// import './App.css';
import Navbar from './components/navigation/Navbar.js'
import Footer from './components/main/Footer.js'
import { BrowserRouter } from 'react-router-dom'
import { Grid, Layout } from 'styled-system'
import Box from './components/main/Box.js'
import Card from './components/content/Card.js'
import logo from './images/logo.svg'
import theme from './theme.js'

function App (props) {
  return (
    <BrowserRouter>
        <Navbar />
        <Box bg="navaccent">
        <Card image={logo}
        title="TheAssemblers"
        text="Welcome to The Assemblers WebApp, Who we are"
        color="white" />
       <Card image={logo}
        title="TheAssemblers"
        text="Welcome to The Assemblers WebApp"
        text="What We Do"
        />
       <Card image={logo}
          title="TheAssemblers"
          text="Welcome to The Assemblers WebApp, Contact Us" />
       </Box>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
