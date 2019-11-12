import React, { Component } from 'react'
import styled from 'styled-components'
import Navlinks from './Navlinks.js'


const MyMobileNavBar = styled.nav`

width: 50vw;
background: ${ props => props.theme.primary };
align-self: flex-end;
box-shadow: -10px 10px 5px ${ props => props.theme.accent };

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

class MobileNavbar extends Component {
  render() {
    return (
      <MyMobileNavBar>
      <Navlinks />
      </MyMobileNavBar>
    );
  }
}
export default MobileNavbar
