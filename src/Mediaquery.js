import React from 'react'

/* global Modernizr */

let screensizes = [
  sm: ((max-width: 360px)),
  md: ((max-width: 480px)),
  lg: ((min-width: 768px))
];



const queries = () => {
  const query = modernizr.mq(screensizes)
    return query
}

export default queries
