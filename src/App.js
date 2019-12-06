import React from 'react';
import Navbar from './components/navigation/Navbar.js'
import Footer from './components/main/Footer.js'
import Box from './components/main/Box.js'
import Card from './components/content/Card.js'
import { BrowserRouter } from 'react-router-dom'
import logo from './images/logo.svg'
import theme from './theme.js'

function App () {
  return (
    <BrowserRouter>
        <Navbar />
        <Box bg="black">
        <Card image={logo}
        title="TheAssemblers"
        text="Welcome to The Assemblers WebApp, Who we are"  />
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
