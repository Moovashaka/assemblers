import React, { useState } from 'react'
import './slider.css'

function Slider() {
  let sliderArr = [<p>Very happy with the service</p>,
    <p>Brilliant service</p>,
    <p>Very helpful, friendly service</p>,
    <p>Bought a high sleeper for the kids,<br /> built quickly and efficiently <br /> - Brilliant service</p>,<p>Exceptional service</p>];

  const [x, setX] = useState(0);

  const Slidein = () => {
    console.log(x);
  x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100)
  };
  const slideTimer = setTimeout(() => { Slidein()}, 5000);

  return (
    <div className="slider">
      {sliderArr.map((item, index) => {

              return (
          <div key={index}
            className="slide" style={{transform:`translateX(${x}%)`}}>
            {item}
          </div>
        );
      })}
    </div>
  )
}
export default Slider
