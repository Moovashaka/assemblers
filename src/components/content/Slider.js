import React, { useState } from 'react'
import styled from 'styled-components'

const Sliders = styled.div`
  position: relative;
  top: 0;
  box-sizing: content-box;
  margin: 0;
  padding: 0;
  display: flex;
  overflow: hidden;
`
const Slides = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  min-width: 100%;
  align-items: center;
  transition: 1.5s;
  color: white;
`

function Slider() {
  let sliderArr = [<p>Very happy with the service<h3>Mrs Swindell, Ormskirk</h3></p>,
    <p>Quick, efficient &amp; reliable Brilliant service<h3>Mr Owens, Chorley</h3></p>,
    <p>Very helpful,carried the boxes<br /> upstairs before they built them<h3>Mr Bryant, Southport</h3></p>,
    <p>Bought a high sleeper for the kids,<br /> built quickly and efficiently <br /> happy to recommend<h3>Ms Hunter, Burscough</h3></p>];

  const [x, setX] = useState(0);

  const Slidein = () => {
  x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100)
  };
  const slideTimer = setTimeout(() => { Slidein()}, 5000);

  return (
    <Sliders>
      {sliderArr.map((item, index) => {
              return (
    <Slides key={index} style={{transform:`translateX(${x}%)`}}>
    {item}
    </Slides>
        );
      })}
    </Sliders>
  )
}
export default Slider
