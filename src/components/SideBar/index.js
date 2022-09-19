import {Component} from 'react'

import {FaTwitter, FaLinkedinIn} from 'react-icons/fa'
import NavigationList from '../NavList'

import {
  SideContainer,
  Footer,
  FooterHeading,
  FooterIcons,
  IconContainer,
  FooterDesciption,
  SocialIcon,
} from './styledcomponent'

const isDark = false

class SideBar extends Component {
  render() {
    return (
      <SideContainer>
        <NavigationList />
        <Footer>
          <FooterHeading isDark={isDark}>CONTACT US</FooterHeading>
          <FooterIcons>
            <SocialIcon
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              alt=" facebook logo"
            />
            <SocialIcon
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              alt="twitter logo"
            />
            <SocialIcon
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png "
              alt=" linked in logo"
            />
          </FooterIcons>
          <FooterDesciption isDark={isDark}>
            Enjoy! Now to see your channels and recommendations!
          </FooterDesciption>
        </Footer>
      </SideContainer>
    )
  }
}
export default SideBar
