import React from 'react'
import styled from 'styled-components'


const ParaOne = styled.p`
color: white;
margin: 0;
padding: 15px 15px;
text-align: center;
`

const ParaTwo = styled.p`
color: white;
margin: 0;
padding: 15px 15px;
text-align: center;
`

const ParaThree = styled.p`
color: white;
margin: 0;
padding: 15px 15px;
text-align: center;
`


const leftTopContent = ({
  paraone,
  paratwo,
  parathree,
}) => (
  <>
  <ParaOne> For all your Flatpack Furniture assembly needs trust TheAssemblers to get the job done in the timely and professional manner you expect. </ParaOne>
  <ParaTwo>Our Flatpack Furniture assembly services are available for all your needs. Whether it's an Ikea Pax wardrobe or Billy Bookcase, we have the skills and experience to get the job done. </ParaTwo>
  <ParaThree>Our friendly and professional fitters will ensure the work is carried out to your satisfaction. Advisers are standing by for your call</ParaThree>
</>
);

export default leftTopContent;
