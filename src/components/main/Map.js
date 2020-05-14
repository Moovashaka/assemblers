import React from 'react';
import './form.css'
import img from '../../images/nwmap450x322.jpg'
import imgwebp from '../../images/nwmap450x322.webp'



/* global Modernizr */
export default class Map extends React.Component {
render() {
  return(
      <div className="mapImage">
      <img src={(Modernizr.webp ? imgwebp : img)} alt="North West Furniture Assembly Areas"></img>
      </div>
      /*<iframe title="Googlemap" className="mapImage" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d302755.07458312873!2d-3.0037013935293686!3d53.64208603536602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b3ee6fcfe1f89%3A0x1ed6fb17951ed48c!2sMarlborough%20Rd%2C%20Southport%20PR9%200RA!5e0!3m2!1sen!2suk!4v1588347466793!5m2!1sen!2suk" />*/

    )
  }
}
