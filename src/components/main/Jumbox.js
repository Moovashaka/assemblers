import styled from 'styled-components'
import { color } from 'styled-system'

const Jumbox = styled.div`
  display:flex;
  flex-flow: column nowrap;
  margin: 3vw 3vw;
  width: 100vw;


  @media screen and (max-width: 768px) {
      flex-flow: column nowrap;
      width: 90vw;
  }
  @media screen and (min-width: 768px) {
    justify-content: center;
    width: 93vw;
  }

  ${color}
`

export default Jumbox
