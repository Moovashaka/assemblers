import styled from 'styled-components'
import { color } from 'styled-system'

const Jumbox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  padding: 5vw 5vw;
  margin: 3vw 3vw;
  width: 100vw;

  @media screen and (max-width: 768px) {
      flex-flow: column wrap;
      justify-content: space-evenly;
      width: 100vw;
  }
  ${color}
`

export default Jumbox
