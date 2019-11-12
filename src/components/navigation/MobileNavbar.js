import React from 'react'
import styled from 'styled-components'
import Navlinks from './Navlinks.js'


const MyMobileNavBar = styled.nav`

width: 50vw;
background: ${ props => props.theme.primary };
margin-bottom: 15px;
align-self: flex-end;
box-shadow: -10px 10px 5px ${ props => props.theme.accent };

transition: transform 1s;
transform: translateX( ${ props => props.displayMobileNavbar ? ("0%") : ("calc(100% + 15px)") });

.nav-links {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;

  height: 60vh;

  List-style:none;
}

.link {
  color: white;
  font-size: 2.5vh;
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
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
