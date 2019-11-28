import React from 'react'
import styled from 'styled-components'
import { space, color, layout } from 'styled-system'

const Col = styled.div`
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  box-sizing: border-box;
  margin: 10vh;
  padding: 20px 20px;
  background: ${ props => props.theme.colors.black };
  font-size: 1vw;

  @media screen and (max-width:768px) {
    display: block;
    float: left;
  };
`;

const Image = styled.img`
  height: 8vmin;
`;

const Title = styled.h3`
  color: #fff;
  margin: 0;
  padding: 15px;
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
