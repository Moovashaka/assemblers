import React from 'react'
import styled from 'styled-components'
import TwitterContainer from '../main/Twitter.js'

const Col = styled.div`
  display: flex;
  flex-flow: column wrap;
  border-radius: 10px;
  margin: 10px;
  padding: 5vw 5vw;
  background: ${ props => props.theme.colors.navaccent };
  font-size: 1.5vw;

  container::after {
    content: "";
    display: block;
    clear: both;
  }
  `;

const Image = styled.img`
height: 10vmax;
text-align: center;
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
  <Morecontent>{morecontent}</Morecontent>
  </Col>
  </>
);


export default Card
