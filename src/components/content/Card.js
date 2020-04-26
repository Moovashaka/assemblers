import React from 'react'
import styled from 'styled-components'


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

const QoneTitle = styled.h4`
color: #fff;
margin: 0;
padding: 5px;
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
  qonetitle,
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
  <QoneTitle>{qonetitle}</QoneTitle>
  <Text>{text}</Text>
  <Content>{content}</Content>
  <Morecontent>{morecontent}</Morecontent>
  </Col>
  </>
);


export default Card
