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
      <a class="twitter-timeline" href="https://twitter.com/AssemblersThe?ref_src=twsrc%5Etfw">Tweets by AssemblersThe</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> Footer
      <Phonenumber />
      </Footerbar>
    );
}
export default Footer
