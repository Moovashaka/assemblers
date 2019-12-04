import React, { Component } from 'react'
import DesktopNavbar from './DesktopNavbar.js'
import MobileNavbar from './MobileNavbar.js'
import styled from 'styled-components'
import Wrapper from './TopSection.js'
import Card from '../content/Card.js'
import Box from '../main/Box.js'
import logo from '../../images/logo.svg'

const MyNavbar = styled.div`
  display: flex;
  flex-flow: column nowrap;
  /* justify-content: center; */
  /* overflow-x: hidden; */
`

class Navbar extends Component {

    state= {
      displayMobileNavbar: false
    }

    componentDidMount = () => {
      window.addEventListener('resize', this.hideMobileNavbar)
    }

    componentWillUnmount = () => {
      window.removeEventListener('resize', this.hideMobileNavbar)
    }

    toggleMobileNavbar = () => {
      this.setState( prevState => {
        return { displayMobileNavbar: !prevState.displayMobileNavbar }
      })
    }

    hideMobileNavbar = () => {
      const screenWidth = window.innerWidth

        if (this.state.displayMobileNavbar && screenWidth > 768) {
          this.setState({
            displayMobileNavbar: false
          })
        }
      }


    render() {
      return (
      <MyNavbar>
        <DesktopNavbar
          displayMobileNavbar = { this.state.displayMobileNavbar }
          toggleMobileNavbar = { this.toggleMobileNavbar } />
          <Wrapper>
          <Box bg="navAccent">
          <Card image={logo}
          title="TheAssemblers"
          text="Welcome to The Assemblers WebApp, Who we are"
          color="white" />
          <Card image={logo}
          title="TheAssemblers"
          text="Welcome to The Assemblers WebApp, Who we are"
          color="white" />
          <Card image={logo}
          title="TheAssemblers"
          text="Welcome to The Assemblers WebApp, Who we are"
          color="white" />
          </Box>
          <MobileNavbar displayMobileNavbar = { this.state.displayMobileNavbar }/>
          </Wrapper>
      </MyNavbar>
    );
    }
  }
export default Navbar
