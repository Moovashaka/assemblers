import React, { Component } from 'react'
import DesktopNavbar from './DesktopNavbar.js'
import MobileNavbar from './MobileNavbar.js'
import styled from 'styled-components'

const MyNavbar = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  overflow-x: hidden;
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
         <MobileNavbar displayMobileNavbar = { this.state.displayMobileNavbar }/>
      </MyNavbar>
    );
    }
  }
export default Navbar
