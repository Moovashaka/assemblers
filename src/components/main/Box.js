import styled from 'styled-components'
import { color } from 'styled-system'

const Box = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding: 5vw 5vw;
  margin: 3vw 3vw;
  /* boxSizing: 'border-box'; */
  minWidth: 0;

  @media screen and (max-width: 768px) {
      flex-flow: column wrap;
      justify-content: space-evenly;
      width: 100vw;
  }
  ${color}
`

export default Box
