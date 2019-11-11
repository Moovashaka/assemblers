import React, { Component } from 'react'
import logo from './assemblerslogo.svg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const MyDesktopNavbar = styled.nav`
background-color: #282c34;
min-height: 30vh;
display: flex;
flex-direction: row;
align-items: center;
justify-content: top;
font-size: calc(10px + 2vmin);
color: white;

.nav-links {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;

  List-style:none;
  
  width: 35vw;
}

.link {
  color: white;
  font-size: 2.5vh;
  text-decoration: none;
}
`
const MyMobileNavButton = styled.button`
  background: transparent;
  height: 6vh;

`
const Img = styled.img `
   height: 20vmin;
   float: left;
   margin: 5vmin;
`

const DesktopNavbar = () => {
    return (
      <MyDesktopNavbar>
      <Img src={logo} />
      <ul className="nav-links">
          <li>
            <Link to="/" className="link"></Link>
          </li>
          <li>
            <Link to="/about" className="link">About</Link>
          </li>
          <li>
            <Link to="/feedback" className="link">Feedback</Link>
          </li>
          <li>
            <Link to="/contact" className="link">Contact</Link>
          </li>
        </ul>

      </MyDesktopNavbar>
    );
  }
export default DesktopNavbar
