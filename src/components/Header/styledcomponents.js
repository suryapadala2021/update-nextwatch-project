import styled from 'styled-components'
import Popup from 'reactjs-popup'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  @media screen and (min-width: 768px) {
    padding: 20px;
  }

  background-color: ${props => (props.isDark ? '#231f20' : 'transparent')}; ;
`
export const HeaderLogo = styled.img`
  height: 30px;
`

export const ProfileImg = styled.img`
  height: 30px;
`
export const NavList = styled.ul`
  display: ${props => (props.small ? 'flex' : 'none')};
  padding-left: 0px;
  list-style-type: none;
  justify-content: space-between;
  align-items: center;
  width: 160px;
  @media screen and (min-width: 768px) {
    display: ${props => (props.small ? 'none' : 'flex')};
    width: 210px;
  }
`
export const ClickButton = styled.button`
  background-color: transparent;
  border: none;
`

export const NavItem = styled.li``
export const LogoutButton = styled.button`
  border-color: ${props => (props.isDark ? '#f9f9f9' : '#4f46e5')};
  color: ${props => (props.isDark ? '#f9f9f9' : ' #4f46e5')};

  background-color: transparent;
  border-radius: 5px;
  height: 35px;
  width: 85px;
  font-size: 16px;
  font-weight: 600;
`
export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  margin: 20px;
  align-self: flex-end;
`
export const MenuPopupMobile = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
`
export const MenuMobileList = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`
export const LogoutPop = styled(Popup)`
  height: 100vh;
  width: 100vw;
`
export const LogoutContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`
export const LogoutBox = styled.div`
  background-color: white;
  width: 90%;
  text-align: center;
  border-radius: 10px;
  background-color: ${props => (props.isDark ? '#181818' : '')};
  padding: 20px;
  @media screen and (min-width: 768px) {
    width: 80%;
    max-width: 400px;
  }
`
export const LogoutHeading = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? 'white' : '#4f46e5')};
  font-weight: 500;
`
export const LogoutBtnContainer = styled.div``
export const LogoutBtns = styled.button`
  font-family: 'Roboto';
  border: ${props => (props.conform ? 'none' : 'inline')};
  border-color: ${props => (props.conform ? 'none' : '#7e858e')};
  background-color: ${props => (props.conform ? '#3b82f6' : 'transparent')};
  color: ${props => (props.conform ? 'white' : '#7e858e')};
  height: 35px;
  width: 90px;
  margin: 10px;
`
