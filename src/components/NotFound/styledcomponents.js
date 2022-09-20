import styled from 'styled-components'

export const NotFoundImg = styled.img`
  width: 60%;
`
export const Heading = styled.h1``
export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const NotFoundHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? 'white' : '#231f20')};
`
export const NotFoundDesc = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#616e7c' : '#7e858e')};
`
