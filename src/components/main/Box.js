import styled from 'styled-components'
import { color } from 'styled-system'

const Box = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 1vw 3vw;
  /* minWidth: 0; */

  @media screen and (max-width: 768px) {
      flex-flow: column wrap;
      justify-content: space-evenly;
      width: 90vw;
  }
  ${color}
`

export default Box
