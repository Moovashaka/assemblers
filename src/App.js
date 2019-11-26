import React from 'react';
// import logo from './assemblerslogo.svg';
// import './App.css';
import Navbar from './components/navigation/Navbar.js'
import Footer from './components/main/Footer.js'
import { BrowserRouter } from 'react-router-dom'
import { Grid, Layout } from 'styled-system'
import Box from './components/main/Box.js'
import Card from './components/content/Card.js'
import logo from './logo.svg'

function App(props) {
  return (
    <BrowserRouter>
        <Navbar />
        <Box width={[1, 1/3, 1/2]} bg={props => props.theme.colors.red}>
        <Card image={logo}
        title="TheAssemblers"
        text="Welcome to The Assemblers WebApp" />
          </Box>
        <Box width={[1, 1/3, 1/2]} bg="red"> </Box>
        <Box width={[1, 1/3, 1/2]} bg="red"> </Box>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
