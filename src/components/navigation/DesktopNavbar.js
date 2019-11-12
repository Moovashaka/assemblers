import React from 'react'
import logo from './assemblerslogo.svg'
import styled from 'styled-components'
import Navlinks from './Navlinks.js'
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
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 15vh;
  color: white;
  padding: 0 0.5rem;
  text-shadow:  2px 2px 2px black;
  font-size: 2.5vh;
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  border-radius: 10px;
  opacity: 0.5;

  &:focus {
    background: rgba(0, 0, 0, 0.1);
    outline: none;
  }

  :hover {
    opacity: 1;
    transition:opacity 2s ease-in-out;
  }
  :hover::after {
    opacity: 0.5;
    transition:opacity 3s ease-in-out;
  }
}
`

const Logo = styled.img `
   height: 20vmin;
   float: left;
   margin: 5vmin;
`
const MyMobileNavButton = styled.button`
  background: transparent;
  display: none;
  border-radius: 10px;

  &:focus {
    background: rgba(0, 0, 0, 0.1);
    outline: none;
}



  @media screen and (max-width: 768px) {
      display: block
}
`
const Icon = styled.img`

  background: none;
  height: 8vh;
  border: none;
  align-self: flex-end;
  opacity: 0.5;

  &:focus {
    outline:none;
  }

  transition: transform 1s ease-in-out;
  transform: rotate(${ props => props.displayMobileNavbar ? ("90deg") : ("180deg") });
`
const DesktopNavbar = props => {
    return (
      <MyDesktopNavbar>
      <Logo src={logo} />
      <Navlinks />
      <MyMobileNavButton
          onClick = { props.toggleMobileNavbar }
        >
      <Icon src={mobileNavIcon} displayMobileNavbar = { props.displayMobileNavbar } alt = "The Assemblers Flatpack furniture assembly" />
      </MyMobileNavButton>
      </MyDesktopNavbar>
    );
  }

export default DesktopNavbar
