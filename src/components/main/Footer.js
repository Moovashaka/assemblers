import React from 'react'
import styled from 'styled-components'
import Phonenumber from '../navigation/Phone.js'

const Footerbar = styled.div`
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;
height: 15vh;
color: white;
opacity: 1;
background: ${ props => props.theme.colors.navprimary };
height: 20vh;
text-align: center;
box-shadow: 5px -5px 5px ${ props => props.theme.colors.navaccent };

@media screen and (max-width: 768px) {
  height: 30vh;
}
`

const Footer = props => {
      return (
      <Footerbar>
      <Phonenumber />
      <h4>&copy;TheAssemblers {(new Date().getFullYear())}</h4>
      </Footerbar>
    );
}
export default Footer
