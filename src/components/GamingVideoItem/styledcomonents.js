import styled from 'styled-components'

export const GameItem = styled.li`
  width: 160px;
  margin: 5px;
  @media screen and (min-width: 768px) {
    width: 200px;
    margin: 10px;
  }
  @media screen and (min-width: 998px) {
    width: 230px;
  }
`

export const GameImg = styled.img`
  width: 100%;
`
export const GameVideoHeading = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? 'white' : '#1e293b')};
  font-size: 14px;
  margin-bottom: 0px;
  font-weight: 500;
`
export const GameVideoViews = styled.p`
  margin-top: 3px;
  color: #94a3b8;
  font-family: 'Roboto';
  font-size: 16px;
`
