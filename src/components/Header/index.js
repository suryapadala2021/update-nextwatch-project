import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut, FiSun} from 'react-icons/fi'
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import NavigationList from '../NavList'
import './index.css'

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
} from './styledcomponents'

const isDark = false

const Header = () => (
  <HeaderContainer isDark={isDark}>
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
    <NavList small>
      <NavItem>
        <ClickButton data-testid="theme">
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
        <ClickButton>
          <FiLogOut size="30" color={isDark ? '#f9f9f9' : '#181818'} />
        </ClickButton>
      </NavItem>
    </NavList>
    <NavList>
      <NavItem>
        <ClickButton data-testid="theme">
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
        <LogoutButton isDark={isDark}>Logout</LogoutButton>
      </NavItem>
    </NavList>
  </HeaderContainer>
)
export default Header
