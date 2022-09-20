import {Component} from 'react'

import {AiFillHome, AiFillFire, AiFillHeart} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import {
  SideBarNavList,
  SideNavItem,
  SideNavItemName,
  Linker,
} from './styledcomponent'
import NxtWatchContext from '../../context/NxtContext'

class NavigationList extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark, activeTab, changeActiveTab} = value
          const changeTab = id => {
            changeActiveTab(id)
          }
          return (
            <SideBarNavList>
              <Linker to="/">
                <SideNavItem
                  isDark={isDark}
                  isActive={activeTab === 'HOME'}
                  onClick={() => {
                    changeTab('HOME')
                  }}
                >
                  {' '}
                  <AiFillHome
                    size="20"
                    color={activeTab === 'HOME' ? 'red' : '#383838 '}
                  />
                  <SideNavItemName
                    isDark={isDark}
                    isActive={activeTab === 'HOME'}
                  >
                    Home
                  </SideNavItemName>
                </SideNavItem>
              </Linker>
              <Linker to="/trending">
                <SideNavItem
                  isDark={isDark}
                  onClick={() => {
                    changeTab('TRENDING')
                  }}
                  isActive={activeTab === 'TRENDING'}
                >
                  <AiFillFire
                    size="20"
                    color={activeTab === 'TRENDING' ? 'red' : '#383838'}
                  />
                  <SideNavItemName
                    isDark={isDark}
                    isActive={activeTab === 'TRENDING'}
                  >
                    Trending
                  </SideNavItemName>
                </SideNavItem>
              </Linker>
              <Linker to="/gaming">
                <SideNavItem
                  isDark={isDark}
                  onClick={() => {
                    changeTab('GAMING')
                  }}
                  isActive={activeTab === 'GAMING'}
                >
                  <AiFillHeart
                    size="20"
                    color={activeTab === 'GAMING' ? 'red' : '#383838'}
                  />
                  <SideNavItemName
                    isDark={isDark}
                    isActive={activeTab === 'GAMING'}
                  >
                    Gaming
                  </SideNavItemName>
                </SideNavItem>
              </Linker>
              <Linker to="/saved-videos">
                <SideNavItem
                  onClick={() => {
                    changeTab('SAVED VIDEOS')
                  }}
                  isActive={activeTab === 'SAVED VIDEOS'}
                  isDark={isDark}
                >
                  <BiListPlus
                    size="20"
                    color={activeTab === 'SAVED VIDEOS' ? 'red' : '#383838'}
                  />
                  <SideNavItemName
                    isDark={isDark}
                    isActive={activeTab === 'SAVED VIDEOS'}
                  >
                    Saved Videos
                  </SideNavItemName>
                </SideNavItem>
              </Linker>
            </SideBarNavList>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default NavigationList
