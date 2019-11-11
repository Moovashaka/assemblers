import React from 'react';
// import logo from './assemblerslogo.svg';
// import './App.css';
import Navbar from './components/navigation/Navbar.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
    </div>
  );
}

export default App;
