import React from 'react'
import styled from 'styled-components'
import Navlinks from './Navlinks.js'

const MyMobileNavBar = styled.nav`
box-sizing: border-box;
flex:none;
width: 105vw;
background: ${ props => props.theme.colors.navprimary };
margin-bottom: 15px;
box-shadow: -5px 5px 5px ${ props => props.theme.colors.navaccent };
z-index: 1000;
margin-left: -100%;

transition: transform 1s;
transform: translateX( ${ props => props.displayMobileNavbar ? ("0%") : ("calc(100% + 15px)") });

.nav-links {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  width: 100%
  List-style:none;
}

.link {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 5vh;
  color: white;
  padding: 5vh 0rem;
  text-shadow:  2px 2px 2px black;
  font-size: 4.5vh;
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  border-radius: 10px;
  opacity: 0.75;

  &:focus {
    background: rgba(0, 0, 0, 0.1);
    outline: none;
  }

  :hover {
    opacity: 1;
    transition:opacity 1s ease-in-out;
  }
  :hover::after {
    opacity: 0.75;
    transition:opacity 3s ease-in-out;
  }
}
`

const MobileNavbar = props => {
      return (
      <MyMobileNavBar displayMobileNavbar = { props.displayMobileNavbar }>
      <Navlinks isMobileLink = { true } />
      </MyMobileNavBar>
    );
  }
export default MobileNavbar
