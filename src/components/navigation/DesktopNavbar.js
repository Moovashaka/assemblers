import React, { Component } from 'react'
import logo from './assemblerslogo.svg'
import styled from 'styled-components'


const MyDesktopNavbar = styled.nav`
background-color: #282c34;
min-height: 30vh;
display: flex;
flex-direction: row;
align-items: center;
justify-content: top;
font-size: calc(10px + 2vmin);
color: white;
`
const Img = styled.img `
   height: 20vmin;
   float: left;
   margin: 5vmin;
`

const DesktopNavbar = () => {
    return (
      <MyDesktopNavbar>
      <Img src={logo} />
      </MyDesktopNavbar>
    );
  }
export default DesktopNavbar
