import React, { Component } from 'react'
import DesktopNavbar from './DesktopNavbar.js'
import MobileNavbar from './MobileNavbar.js'
import styled from 'styled-components'
import Wrapper from './TopSection.js'
import Topcard from '../content/Topcard.js'
import logo from '../../images/logo.svg'
import Jumbox from '../main/Jumbox.js'

const MyNavbar = styled.div`
  display: flex;
  flex-flow: column nowrap;
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
            <Jumbox>
            <Topcard image={logo}
            title="TheAssemblers"
            text="Welcome to The Assemblers WebApp"
            content="This is the content"
            morecontent="this is more conent"/>
            </Jumbox>
          <MobileNavbar displayMobileNavbar = { this.state.displayMobileNavbar }/>
          </Wrapper>
        </MyNavbar>
    );
    }
  }
export default Navbar
