import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut, FiSun} from 'react-icons/fi'

import {
  HeaderContainer,
  HeaderLogo,
  NavList,
  ClickButton,
  NavItem,
  ProfileImg,
  LogoutButton,
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
        <ClickButton>
          <GiHamburgerMenu size="30" color={isDark ? '#f9f9f9' : '#181818'} />
        </ClickButton>
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
