import React, { Component } from 'react'
import DesktopNavbar from './DesktopNavbar.js'
import MobileNavbar from './MobileNavbar.js'
import styled from 'styled-components'

const MyNavbar = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
`

class Navbar extends Component {

    state= {
      displayMobileNavbar: false
    }
    render() {
      return (
      <MyNavbar>
        <DesktopNavbar />
         <MobileNavbar displayMobileNavbar = { this.state.displayMobileNavbar }/>
      </MyNavbar>
    );
    }
  }
export default Navbar
