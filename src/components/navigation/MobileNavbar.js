import React, { Component } from 'react'
import styled from 'styled-components'
import mobileNavIcon from '../../images/mobileNavIcon.svg'

const MyMobileNavButton = styled.nav`
  justify-content: center;
`
const Icon = styled.img`
 height: 5vh;
 background: none;
`

class MobileNavbar extends Component {
  render() {
    return (
      <MyMobileNavButton>
        <Icon src={mobileNavIcon} alt = "The Assemblers Flatpack furniture assembly" />
      </MyMobileNavButton>
    );
  }
}
export default MobileNavbar
