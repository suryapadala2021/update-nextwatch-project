import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut, FiSun} from 'react-icons/fi'
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import NavigationList from '../NavList'
import './index.css'
import {Linker} from '../NavList/styledcomponent'

import {
  HeaderContainer,
  HeaderLogo,
  ClickButton,
  NavItem,
  NavList,
  ProfileImg,
  LogoutButton,
  IconButton,
  MenuPopupMobile,
  MenuMobileList,
  LogoutPop,
  LogoutContainer,
  LogoutBox,
  LogoutHeading,
  LogoutBtnContainer,
  LogoutBtns,
} from './styledcomponents'
import NxtWatchContext from '../../context/NxtContext'

const Header = props => {
  const logout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark, changeTheme} = value

        const changeMode = () => {
          changeTheme()
        }

        return (
          <HeaderContainer isDark={isDark}>
            <Linker to="/">
              {!isDark && (
                <HeaderLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="website logo"
                />
              )}
              {isDark && (
                <HeaderLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                  alt="website logo"
                />
              )}
            </Linker>
            <NavList small>
              <NavItem>
                <ClickButton data-testid="theme" onClick={changeMode}>
                  {!isDark && <FaMoon size="25" />}
                  {isDark && <FiSun size="25" color="#f9f9f9" />}
                </ClickButton>
              </NavItem>
              <NavItem>
                <Popup
                  modal
                  className="popup-content"
                  trigger={
                    <ClickButton>
                      <GiHamburgerMenu
                        size="30"
                        color={isDark ? '#f9f9f9' : '#181818'}
                      />
                    </ClickButton>
                  }
                >
                  {close => (
                    <MenuPopupMobile isDark={isDark}>
                      <IconButton type="button" onClick={() => close()}>
                        <IoMdClose size={20} color="black" />
                      </IconButton>
                      <MenuMobileList>
                        <NavigationList />
                      </MenuMobileList>
                    </MenuPopupMobile>
                  )}
                </Popup>
              </NavItem>
              <NavItem>
                <LogoutPop
                  modal
                  className="pop-content"
                  trigger={
                    <ClickButton>
                      <FiLogOut
                        size="30"
                        color={isDark ? '#f9f9f9' : '#181818'}
                      />
                    </ClickButton>
                  }
                >
                  {close => (
                    <LogoutContainer>
                      <LogoutBox isDark={isDark}>
                        <LogoutHeading isDark={isDark}>
                          Are you sure, you want to logout?
                        </LogoutHeading>
                        <LogoutBtnContainer>
                          <LogoutBtns onClick={() => close()}>
                            Cancel
                          </LogoutBtns>
                          <LogoutBtns conform onClick={logout}>
                            Confirm
                          </LogoutBtns>
                        </LogoutBtnContainer>
                      </LogoutBox>
                    </LogoutContainer>
                  )}
                </LogoutPop>
              </NavItem>
            </NavList>
            <NavList>
              <NavItem>
                <ClickButton data-testid="theme" onClick={changeMode}>
                  {!isDark && <FaMoon size="25" />}
                  {isDark && <FiSun size="25" color="#f9f9f9" />}
                </ClickButton>
              </NavItem>
              <NavItem>
                <ClickButton>
                  <ProfileImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </ClickButton>
              </NavItem>
              <NavItem>
                <LogoutPop
                  modal
                  className="pop-content"
                  trigger={<LogoutButton isDark={isDark}>Logout</LogoutButton>}
                >
                  {close => (
                    <LogoutContainer>
                      <LogoutBox isDark={isDark}>
                        <LogoutHeading isDark={isDark}>
                          Are you sure, you want to logout?
                        </LogoutHeading>
                        <LogoutBtnContainer>
                          <LogoutBtns onClick={() => close()}>
                            Cancel
                          </LogoutBtns>
                          <LogoutBtns conform onClick={logout}>
                            Confirm
                          </LogoutBtns>
                        </LogoutBtnContainer>
                      </LogoutBox>
                    </LogoutContainer>
                  )}
                </LogoutPop>
              </NavItem>
            </NavList>
          </HeaderContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
export default withRouter(Header)
