import React from 'react';
import Navbar from './components/navigation/Navbar.js'
import Footer from './components/main/Footer.js'
import Box from './components/main/Box.js'
import Card from './components/content/Card.js'
import { BrowserRouter } from 'react-router-dom'
import logo from './images/logo.svg'
import theme from './theme.js'
import Twitter from './components/main/Twitter.js'

function App () {
  return (
    <BrowserRouter>
        <Navbar />
        <Box bg="black">
        <Card image={logo}
        title="FAQ"
        text="Our fitters carry
        some of the more common spare parts, just in case something is missing"
        content=""
        />
       <Card image={logo}
        title="Customer Feedback"
        text="Brilliant service, can't recommend it highly enough"
        />
       <Card image={logo}
          title="Contact US"
          text="Fill out our contact form or phone for a quote"
        />
        <Twitter />
       </Box>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
