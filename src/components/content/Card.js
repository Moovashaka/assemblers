import React from 'react'
import styled from 'styled-components'
import { space, color, layout } from 'styled-system'

const Col = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  box-sizing: border-box;
  border-radius: 10px;
  margin: 2vh;
  padding: 20px 20px;
  background: ${ props => props.theme.colors.black };
  font-size: 1.5vw;

  container::after {
    content: "";
    display: block;
    clear: both;
  }

  @media screen and (min-width:768px) {
    float: left;
  };
`;

const Image = styled.img`
  height: 10vmin;

  @media screen and (max-width:768px) {
    height: 5vmin;
  };
`;

const Title = styled.h3`
  color: #fff;
  margin: 0;
  padding: 15px;
  text-align: center;
`;

const Text = styled.p`

  color: white;
  margin: 0;
  padding: 0px 15px;
  text-align: center;
`;

const Card = ({
  title,
  image,
  text,
  color,
  layout,
  space,
  ...props
}) => (
  <Col {...props}>
  <Image src={image} alt={title} />
  <Title>{title}</Title>
  <Text>{text}</Text>
  </Col>
);


export default Card
