import React from 'react'
import styled from 'styled-components'
import imgwebp from '../../images/computers.webp'
import img from '../../images/computers.jpg'

const Col = styled.div`
  display: flex;
  flex-flow: column wrap;
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
  `;

const Image = styled.img`
height: 10vmax;
text-align: center;

@media screen and (max-width:768px) {
width: 25vmax;
height: 25vmax;
margin: 0 0 0 30vw;
}

@media screen and (max-width:480px) {
width: 15vmax;
height: 15vmax;
margin: 0 0 0 29vw;
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

const Morecontent = styled.p`
  color: white;
  margin: 0;
  padding: 10px 5px;
  text-align: center;
`;
const EvenMorecontent = styled.p`
  color: white;
  margin: 0;
  padding: 10px 5px;
  text-align: center;
`;

const Phone = styled.h4`
color: #fff;
margin: 0;
padding: 5px;
`;

/* global Modernizr */

const Cardtwo = ({
  title,
  image,
  text,
  content,
  morecontent,
  evenmorecontent,
  phone,
  color,
  layout,
  space,
  ...props
}) => (
  <>
  <Col color={color} {...props} >
  <Image src={(Modernizr.webp ? imgwebp : img)} alt={title} />
  <Title>{title}</Title>
  <Text>{text}</Text>
  <Content>{content}</Content>
  <Morecontent>{morecontent}</Morecontent>
  <EvenMorecontent>{evenmorecontent}</EvenMorecontent>
  <Phone>{phone}</Phone>
  </Col>
  </>
);


export default Cardtwo
