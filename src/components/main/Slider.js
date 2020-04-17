import React, { useState } from 'react';
import styled from 'styled-components'
import Slidercontent from './Slidercontent'

const Slide = styled.div`
  position: relative;
  margin: 0 auto;
  text-align: center;
  overflow: hidden;
`
/*
@function Slider
*/
const Slider = () => {
  const getWidth = () => window.innerWidth

  const [state, setState] = useState({
    translate: 0,
    transition: 0.45
  })

const { translate, transition } = state
  return (
    <div>
     <Slide
      translate={translate}
      transition={transition}
      width={getWidth()}
     >Slider Component</Slide>
    </div>
)}
export default Slider
