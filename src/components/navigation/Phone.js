import React from 'react'
import styled from 'styled-components'

const Phonenum = styled.p`
color: white;
margin: 0;
padding: 15px 15px;
opacity: 0.75;
`
const Phonenumber = props => {
  return (
    <Phonenum className="phone">
    T: 07305 474590
    </Phonenum>
  );
}
export default Phonenumber
