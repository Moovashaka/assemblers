import styled from 'styled-components'
import { color } from 'styled-system'

const Jumbox = styled.div`
  display:flex;
  flex-flow: column nowrap;
  justify-content: center;
  padding: 2vh 3vw;
  width: 100vw;


  @media screen and (max-width: 768px) {
      width: 90vw;
  }
  @media screen and (min-width: 768px) {
    width: 94vw;
  }

  ${color}
`

export default Jumbox
