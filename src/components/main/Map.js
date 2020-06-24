import React from 'react';
import './form.css'
import imgsm from '../../images/nwmap250x179.jpg'
import webpsm from '../../images/nwmap250x179.webp'
import imgmd from '../../images/nwmap350x250.jpg'
import webpmd from '../../images/nwmap350x250.webp'

// import switchimg from '../../Mediaquery.js'


/* global Modernizr */
export default class Map extends React.Component {
render() {
  return(
      <div className="mapImage">
      <img src={webpsm} alt="text here" />
      </div>
    )
  }
}
