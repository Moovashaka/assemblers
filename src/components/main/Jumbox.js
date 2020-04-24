import styled from 'styled-components'
import { color } from 'styled-system'

const Jumbox = styled.div`
  display:flex;
  flex-flow: column nowrap;
  justify-content: center;
  padding: 2vh 3vw;

  @media screen and (max-width: 480px) {
      width: 95vw;
  }
  @media screen and (min-width: 768px) {
      width: 90vw;
  }
  // @media screen and (min-width: 768px) {
  //   width: 94vw;
  // }
  @media screen and (min-width:1200px) {
  padding: 2vh 1vmin 2vh 9vmin;
  }

  ${color}
`

export default Jumbox
