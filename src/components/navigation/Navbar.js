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
            title="Flatpack Assembly Service"
            text="Welcome to TheAssemblers, your first point of Contact
            for fast efficient Flatpack Furniture assembly. We take the grind out
            of flatpack assembly so you can focus on doing the things you need to
            get done, whether work or leisure. "
            content="Our experienced, polite and respectful assemblers will come to you at
            home, work, office or garden and put your flatpack together with the minimum of fuss"
            morecontent="Whether you have a single Ikea pax or you wish to create a walk-in
            wardrobe, a Forest shed from Homebase or a BalconyFort from Dunster House we'd               delighted to build it for you
            be delighted to build it for you"/>
            </Jumbox>
          <MobileNavbar displayMobileNavbar = { this.state.displayMobileNavbar }/>
          </Wrapper>
        </MyNavbar>
    );
    }
  }
export default Navbar
