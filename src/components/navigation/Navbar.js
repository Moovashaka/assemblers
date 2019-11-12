import React, { Component } from 'react'
import DesktopNavbar from './DesktopNavbar.js'
import MobileNavbar from './MobileNavbar.js'

class Navbar extends Component {
  render() {
    return (
      <div>
        <DesktopNavbar />
      </div>
    );
  }
}
export default Navbar
