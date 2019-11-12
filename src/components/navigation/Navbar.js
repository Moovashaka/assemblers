import React, { Component } from 'react'
import DesktopNavbar from './DesktopNavbar.js'
import MobileNavbar from './MobileNavbar.js'
import styled from 'styled-components'

const MyNavbar = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
`

const Navbar = () => {
      return (
      <MyNavbar>
        <DesktopNavbar />
         <MobileNavbar /> 
      </MyNavbar>
    );
  }
export default Navbar
