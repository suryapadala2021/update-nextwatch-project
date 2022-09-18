import styled from 'styled-components'

export const SideBarNavList = styled.ul`
  padding-left: 0px;
  list-style-type: none;
`
export const SideNavItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  margin-bottom: 0px;
  margin-top: 0px;

  background-color: ${props => {
    if (props.isActive && props.isDark) {
      return '#212121'
    }
    if (props.isActive) {
      return '#d7dfe9'
    }
    return ''
  }};
  padding-left: 8px;
`

export const SideNavItemName = styled.p`
  font-family: 'Roboto';
  margin-left: 10px;

  color: ${props => {
    if (props.isDark) {
      return '#f1f1f1'
    }
    if (props.isActive === true) {
      return '#231f20'
    }
    return '#383838'
  }};
  font-weight: ${props => (props.isActive ? '600' : '')};
`
