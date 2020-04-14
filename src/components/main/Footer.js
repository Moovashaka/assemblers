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
`

const Footer = props => {
      return (
      <Footerbar>
       Footer
      <Phonenumber />
      </Footerbar>
    );
}
export default Footer
