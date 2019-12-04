import styled from 'styled-components'

const Box = styled.div`
  display: flex;
  flex-flow: row nowrap;
  boxSizing: 'border-box';
  minWidth: 0;

  @media screen and (max-width: 768px) {
      flex-flow: column wrap;
      justify-content: space-evenly;
      width: 100vw;
  }
`

export default Box
