import React, { Component } from 'react'
import logo from './assemblerslogo.svg'
import styled from 'styled-components'
import Navlinks from './Navlinks.js'
import MobileNavbar from './MobileNavbar.js'
import mobileNavIcon from '../../images/mobileNavIcon.svg'



const MyDesktopNavbar = styled.nav`
background: ${ props => props.theme.primary };
min-height: 30vh;
display: flex;
flex-direction: row;
align-items: center;
font-size: calc(10px + 2vmin);

box-shadow: -10px 10px 5px ${ props => props.theme.accent };
/* color: white; */

.nav-links {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;

  List-style:none;

  width: 35vw;

  @media screen and (max-width: 768px) {
      display: none;
  }
}

.link {
  color: white;
  font-size: 2.5vh;
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
}
`

const Logo = styled.img `
   height: 20vmin;
   float: left;
   margin: 5vmin;
`
const MyMobileNavButton = styled.button`
  background: transparent;
  border: none;
  display: none;

  @media screen and (max-width: 768px) {
      display: block;
  }

`
const Icon = styled.img`
 height: 5vh;
 background: none;
`
const DesktopNavbar = () => {
    return (
      <MyDesktopNavbar>
      <Logo src={logo} />
      <Navlinks />
      <MyMobileNavButton>
      <Icon src={mobileNavIcon} alt = "The Assemblers Flatpack furniture assembly" />
      </MyMobileNavButton>
      </MyDesktopNavbar>
    );
  }

export default DesktopNavbar
