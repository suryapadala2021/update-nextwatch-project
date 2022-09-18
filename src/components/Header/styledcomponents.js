import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  @media screen and (min-width: 768px) {
    padding: 20px;
  }
  margin-bottom: 20px;
  background-color: ${props => (props.isDark ? '#181818 ' : '#f9f9f9')};
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
