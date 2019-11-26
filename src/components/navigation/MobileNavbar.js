import React from 'react'
import styled from 'styled-components'
import Navlinks from './Navlinks.js'


const MyMobileNavBar = styled.nav`

width: 50vw;
background: ${ props => props.theme.colors.navprimary };
margin-bottom: 15px;
align-self: flex-end;
box-shadow: -5px 5px 5px ${ props => props.theme.colors.navaccent };

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

const MobileNavbar = props => {
      return (
      <MyMobileNavBar displayMobileNavbar = { props.displayMobileNavbar }>
      <Navlinks isMobileLink = { true } />
      </MyMobileNavBar>
    );
  }
export default MobileNavbar
