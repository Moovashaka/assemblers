import React from 'react'
import styled from 'styled-components'
import Slider from './Slider.js'


const Col = styled.div`
  display: flex;
  flex-flow: column nowrap;
  border-radius: 10px;
  margin: 10px;
  padding: 5vw 1vw;
  background: ${ props => props.theme.colors.navaccent };
  font-size: 1em;

  container::after {
    content: "";
    display: block;
    clear: both;
  }

  @media screen and (max-width:768px) {
    font-size: 1em;
    justify-content: center;

  };
`;

const Image = styled.img`
height: 10vmax;
justify-content: center;

@media screen and (max-width:768px) {
width: 25vmax;
height: 25vmax;
padding: 0 0 0 30vw;
}

@media screen and (max-width:480px) {
width: 15vmax;
height: 15vmax;
padding: 0 0 0 29vw;
}
`;

const Title = styled.h3`
  color: #fff;
  margin: 0;
  padding: 5px;
  text-align: center;
`;

const Text = styled.p`
  color: white;
  margin: 0;
  padding: 10px 5px;
  text-align: center;
`;

const Content = styled.p`
  color: white;
  margin: 0;
  padding: 10px 5px;
  text-align: center;
`;

const Cardone = ({
  title,
  image,
  color,
  layout,
  content,
  space,
  ...props
}) => (
  <>
  <Col color={color} {...props} >
  <Image src={image} alt={title} />
  <Title>{title}</Title>
  <Slider></Slider>
  <Content>{content}</Content>
  </Col>
  </>
);


export default Cardone
