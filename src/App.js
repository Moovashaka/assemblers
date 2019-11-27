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
        <Box width={[1, 1/2, 1/3]} bg="black">
        <Card image={logo}
        title="TheAssemblers"
        text="Welcome to The Assemblers WebApp" />
          </Box>
        <Box width={[1, 1/2, 1/3]} bg="green">        <Card image={logo}
                title="TheAssemblers"
                text="Welcome to The Assemblers WebApp" /></Box>
        <Box width={[1, 1/2, 1/3]} bg="red">        <Card image={logo}
                title="TheAssemblers"
                text="Welcome to The Assemblers WebApp" /></Box>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
