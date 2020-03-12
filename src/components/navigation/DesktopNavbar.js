import React from 'react'
import logo from './assemblerslogophone.svg'
import styled from 'styled-components'
import Navlinks from './Navlinks.js'
import mobileNavIcon from '../../images/mobileNavIcon.svg'
import Phonenumber from '../navigation/Phone.js'


const MyDesktopNavbar = styled.nav`
background: ${ props => props.theme.colors.navprimary };
min-height: 30vh;
display: flex;
flex-direction: row;
align-items: center;
font-size: calc(10px + 3vmin);

box-shadow: -5px 5px 5px ${ props => props.theme.colors.navaccent };
/* color: white; */

.nav-links {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: right;
  List-style:none;
  width: 25vw;

  @media screen and (max-width: 768px) {
      display: none;
  }
}

.link {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  height: 15vh;
  float: right;
  color: white;
  padding: 0 1rem;
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
    transition:opacity 1s ease-in-out;
  }
  :hover::after {
    opacity: 1;
    transition:opacity 2s ease-in-out;
  }
}

.phone {
    display: flex;
    flex-flow: row nowrap;
    font-size: calc(10px + 3vmin);
    text-shadow:  2px 2px 2px black;
    padding: 5vw;
  }

@media screen and (max-width: 62em) {
  .phone {
    display: flex;
    flex-flow: row nowrap;
    margin: 30vw 0vw 0vw -57vw;
    }
}

@media screen and (max-width: 52em) {
  .phone {
    display: flex;
    flex-flow: row nowrap;
    margin: 25vw 0vw 0vw -22vw;
    }
}

@media screen and (max-width: 40em) {
  .phone {
    display: flex;
    flex-flow: row nowrap;
    margin: 35vw 0vw 0vw -67vw;
    }
}
`
const Logo = styled.img `
   height: 20vmin;
   float: right;
   margin: 5vmin;
   box-shadow: -5px 5px 5px 5px ${ props => props.theme.navaccent }:
`
const MyMobileNavButton = styled.button`
  background: transparent;
  display: none;
  border-radius: 10px;
  margin: 0 2vw 0 5vw;

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
      <Phonenumber />
      </MyDesktopNavbar>
    );
  }

export default DesktopNavbar
