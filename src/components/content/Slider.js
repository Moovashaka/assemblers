import React, { useState } from 'react'
import './slider.css'

function Slider() {
  let sliderArr = [<p>Very happy with the service<h3>Mrs Swindell, Ormskirk</h3></p>,
    <p>Quick, efficient &amp; reliable Brilliant service<h3>Mr Owens, Chorley</h3></p>,
    <p>Very helpful,carried the boxes<br /> upstairs before they built them<h3>Mr Bryant, Southport</h3></p>,
    <p>Bought a high sleeper for the kids,<br /> built quickly and efficiently <br /> happy to recommend<h3>Ms Hunter, Burscough</h3></p>];

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
