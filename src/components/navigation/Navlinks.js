import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Navlinks = () => {
      return (
        <ul className="nav-links">
            <li>
              <Link to="/" className="link"></Link>
            </li>
            <li>
              <Link to="/about" className="link">About</Link>
            </li>
            <li>
              <Link to="/feedback" className="link">Feedback</Link>
            </li>
            <li>
              <Link to="/contact" className="link">Contact</Link>
            </li>
          </ul>
    );
  }
export default Navlinks
