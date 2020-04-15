import React from 'react'
import styled from 'styled-components'

const Phonenum = styled.p`
color: white;
opacity: 1;
`
const Phonenumber = props => {
  return (
    <Phonenum className="phone">
    T: 07305 474590
    </Phonenum>
  );
}
export default Phonenumber
