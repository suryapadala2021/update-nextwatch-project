import styled from 'styled-components'

const SideContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
  width: 25%;
  flex-shrink: 0;
  max-width: 280px;
  height: 100vh;
  padding: 15px;
`
export default SideContainer
