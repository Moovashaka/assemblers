import React from 'react';
import Navbar from './components/navigation/Navbar.js'
import Footer from './components/main/Footer.js'
import Box from './components/main/Box.js'
import Card from './components/content/Card.js'
import Cardone from './components/content/Cardone.js'
import { BrowserRouter } from 'react-router-dom'
import logo from './images/logo.svg'
import table from './images/table.png'
import sboard from './images/sideboard.png'
import comp from './images/computers.jpg'
import theme from './theme.js'
import Twitter from './components/main/Twitter.js'


function App () {
  return (
    <BrowserRouter>
        <Navbar />
        <Box bg="black">
        <Card image={table}
        title="FAQ"
        qonetitle="What if something is missing?"
        text=" Our fitters carry some of the more common spare parts,
         but we advise you to check before our fitters arrive to ensure that all parts have been packaged."
        qtwotitle="Can you dispose of the packaging?"
        content="Unfortunately we can't as it becomes commercial waste if we take it."
        more
        />
       <Cardone image={sboard}
        title="Customer Feedback"
        />
       <Card image={comp}
          title="Contact Us"
          text="Fill out our contact form or Telephone
          07305 474590 for a quote"
        />
        <Twitter />
       </Box>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
