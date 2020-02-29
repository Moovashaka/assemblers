import React from 'react'
import styled from 'styled-components'

const Col = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  border-radius: 10px;
  margin: 10px;
  padding: 5vw 5vw;
  background: ${ props => props.theme.colors.darkBlue };
  border: .15rem solid;
  border-color: ${ props => props.theme.colors.navprimary };
  font-size: 1.5vw;

  container::after {
    content: "";
    display: block;
    clear: both;
  }

  @media screen and (min-width:768px) {
    /* float: left; */
  };
`;

const Image = styled.img`
  height: 15vmin;
  width: 80vmin;

  @media screen and (max-width:768px) {
    height: 10vmin;
    width: 80vmin;
    font-size: 3vw;  
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
