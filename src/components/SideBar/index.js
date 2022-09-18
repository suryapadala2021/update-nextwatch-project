import {Component} from 'react'

import NavigationList from '../NavList'

import SideContainer from './styledcomponent'

class SideBar extends Component {
  render() {
    return (
      <SideContainer>
        <NavigationList />
      </SideContainer>
    )
  }
}
export default SideBar
