import styled from 'styled-components'

export const GameContainer = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9 ')};
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export const ResponsiveGameContainer = styled.div`
  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: 1300px;
  }
`
export const GamingBody = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`
export const GamingVideosList = styled.ul`
  padding-left: 0px;
  list-style-type: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`
export const GamingContent = styled.div`
  flex-grow: 1;
`
