import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SideContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    width: 25%;
    flex-shrink: 0;
    max-width: 280px;
    height: 100vh;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${props => (props.isDark ? '#231f20' : '')};
  }
`

export const Footer = styled.div``

export const FooterHeading = styled.p`
  font-family: 'Roboto';
  color: #606060;
  font-size: 16px;
  color: ${props => (props.isDark ? '#f9f9f9' : '')};
`
export const FooterIcons = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const IconContainer = styled.div`
  background-color: ${props => {
    if (props.f) {
      return '#00306e'
    }
    if (props.t) {
      return '#3b82f6'
    }
    return '#4f46e5'
  }};
  width: 35px;
  height: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  margin: 6px;
`
export const FooterDesciption = styled.p`
  color: ${props => (props.isDark ? '#f9f9f9' : '#909090')};
  font-weight: 500;
`
export const Linker = styled(Link)`
  text-decoration: none;
`
export const SocialIcon = styled.img`
  height: 30px;
  margin: 5px;
`
