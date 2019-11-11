import React, { Component } from 'react'
import logo from 'assemblerslogo.svg'
import styled from 'styled-components'


const MyDesktopNavbar = styled.nav`
  display:flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;

  background: red;
  color: white;

  height:15vh;
`

const DesktopNavbar = () => {
    return (
      <MyDesktopNavbar>
      <div className="logo ">
      <img src={logo} alt="logo" />
      </div>
      </MyDesktopNavbar>
    );
  }
export default DesktopNavbar
