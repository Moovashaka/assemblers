import React from 'react'
import styled from 'styled-components'

const Col = styled.div`
  display: flex;
  flex-flow: column wrap;
  box-sizing: border-box;
  width: 80vw;
  border-radius: 10px;
  margin: 2vh;
  padding: 1vw 1vw;
  background: ${ props => props.theme.colors.darkBlue };
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
  font-size: 1vw;
  text-align: center;
`;

const Morecontent = styled.p`
  color: white;
  margin: 0;
  padding: 10px 5px;
  text-align: center;
`;

const Card = ({
  title,
  image,
  text,
  content,
  morecontent,
  color,
  layout,
  space,
  ...props
}) => (
  <>
  <Col color={color} {...props} >
  <Image src={image} alt={title} />
  <Title>{title}</Title>
  <Text>{text}</Text>
  <Content>{content}</Content>
  <Content>{morecontent}</Content>
  </Col>
  </>
);


export default Card
