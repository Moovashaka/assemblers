import styled from 'styled-components'
import { color } from 'styled-system'

const Jumbox = styled.div`
  clear: both;
  display:flex;
  flex-flow: column nowrap;
  margin: 0vw 3vw;
  width: 100vw;


  @media screen and (max-width: 768px) {
      flex-flow: column wrap;
      width: 100vw;
  }
  @media screen and (min-width: 768px) {
    justify-content: center;
  }

  ${color}
`

export default Jumbox
