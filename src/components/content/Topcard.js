import React from 'react'
import styled from 'styled-components'

const Col = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  border-radius: 10px;
  background: ${ props => props.theme.colors.navaccent };
  border: .15em solid;
  border-color: ${ props => props.theme.colors.navprimary };
  font-size: 1.25em;

  container::after {
    content: "";
    display: block;
    clear: both;
  }

  @media screen and (min-width:768px) {
    font-size: 1em;
  };
  @media screen and (max-width:480px) {
    font-size: 1rem;
  };
`;

const Image = styled.img`

  @media screen and (max-width:768px) {
  width: 90vmin;
  margin: 1vh 1vw 1vh 1vw;
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

const Topcard = ({
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


export default Topcard
