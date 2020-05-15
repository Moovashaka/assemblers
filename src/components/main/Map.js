import React from 'react';
import './form.css'
import img from '../../images/nwmap250x179.jpg'
import imgwebp from '../../images/nwmap250x179.webp'



/* global Modernizr */
export default class Map extends React.Component {
render() {
  return(
      <div className="mapImage">
      <img src={(Modernizr.webp ? imgwebp : img)} alt="North West Furniture Assembly Areas"></img>
      </div>
    )
  }
}
