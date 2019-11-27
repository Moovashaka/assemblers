import React from 'react'
import styled from 'styled-components'
import { color } from 'styled-system'

const Col = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 250px;
  margin: 0;
  padding: 20px 20px;
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
  ...props
}) => (
  <Col {...props}>
  <Image src={image} alt={title} />
  <Title>{title}</Title>
  <Text>{text}</Text>
  </Col>
);


export default Card