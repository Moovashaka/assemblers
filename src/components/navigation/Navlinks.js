import React from 'react'
import { Link, animateScroll as Scroll } from 'react-scroll'


const Navlinks = props => {
    let tempTabIndex
    if (props.isMobileLink) {
      tempTabIndex = "-1"
    }
      return (
        <ul className="nav-links">
            <li>
              <Link to="home" className="link" tabIndex = { tempTabIndex } ></Link>
            </li>
            <li>
              <Link to="about" smooth={true} className="link" tabIndex = { tempTabIndex } >About</Link>
            </li>
            <li>
              <Link to="feedback" smooth={true} className="link" tabIndex = { tempTabIndex } >Feedback</Link>
            </li>
            <li>
              <Link to="contact" smooth={true} className="link" tabIndex = { tempTabIndex } >Contact</Link>
            </li>
          </ul>
    );
  }
export default Navlinks
