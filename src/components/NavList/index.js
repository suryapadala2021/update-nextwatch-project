import {Component} from 'react'

import {AiFillHome, AiFillFire, AiFillHeart} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import {
  SideBarNavList,
  SideNavItem,
  SideNavItemName,
  Linker,
} from './styledcomponent'

const isDark = false

class NavigationList extends Component {
  state = {activeTabId: 'HOME'}

  changeTab = Id => {
    this.setState({activeTabId: Id})
  }

  render() {
    const {activeTabId} = this.state
    return (
      <SideBarNavList>
        <Linker to="/">
          <SideNavItem
            isDark={isDark}
            isActive={activeTabId === 'HOME'}
            onClick={() => {
              this.changeTab('HOME')
            }}
          >
            {' '}
            <AiFillHome
              size="20"
              color={activeTabId === 'HOME' ? 'red' : '#383838 '}
            />
            <SideNavItemName isDark={isDark} isActive={activeTabId === 'HOME'}>
              Home
            </SideNavItemName>
          </SideNavItem>
        </Linker>
        <Linker to="/trending">
          <SideNavItem
            isDark={isDark}
            onClick={() => {
              this.changeTab('TRENDING')
            }}
            isActive={activeTabId === 'TRENDING'}
          >
            <AiFillFire
              size="20"
              color={activeTabId === 'TRENDING' ? 'red' : '#383838'}
            />
            <SideNavItemName
              isDark={isDark}
              isActive={activeTabId === 'TRENDING'}
            >
              Trending
            </SideNavItemName>
          </SideNavItem>
        </Linker>
        <Linker to="/gaming">
          <SideNavItem
            isDark={isDark}
            onClick={() => {
              this.changeTab('GAMING')
            }}
            isActive={activeTabId === 'GAMING'}
          >
            <AiFillHeart
              size="20"
              color={activeTabId === 'GAMING' ? 'red' : '#383838'}
            />
            <SideNavItemName
              isDark={isDark}
              isActive={activeTabId === 'GAMING'}
            >
              Gaming
            </SideNavItemName>
          </SideNavItem>
        </Linker>
        <Linker to="/saved-videos">
          <SideNavItem
            onClick={() => {
              this.changeTab('SAVED VIDEOS')
            }}
            isActive={activeTabId === 'SAVED VIDEOS'}
            isDark={isDark}
          >
            <BiListPlus
              size="20"
              color={activeTabId === 'SAVED VIDEOS' ? 'red' : '#383838'}
            />
            <SideNavItemName
              isDark={isDark}
              isActive={activeTabId === 'SAVED VIDEOS'}
            >
              Saved Videos
            </SideNavItemName>
          </SideNavItem>
        </Linker>
      </SideBarNavList>
    )
  }
}
export default NavigationList
