import styled from 'styled-components'
import { color } from 'styled-system'

const Jumbox = styled.div`
  clear: both;
  display:flex;
  flex-flow: column nowrap;
  justify-content: center;
  margin: 0vw 3vw;
  width: 100vw;


  @media screen and (max-width: 768px) {
      flex-flow: column wrap;
      justify-content: center;
      width: 100vw;
  }
  ${color}
`

export default Jumbox
