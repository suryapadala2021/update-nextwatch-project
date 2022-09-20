import {
  HomeContainer,
  ResponsiveHomeContainer,
  HomeBody,
  HomeContent,
} from '../Home/styledcomponents'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  NotFoundImg,
  NotFoundContainer,
  NotFoundHeading,
  NotFoundDesc,
} from './styledcomponents'
import NxtWatchContext from '../../context/NxtContext'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark} = value
      const imgUrl = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <HomeContainer isDark={isDark}>
          <ResponsiveHomeContainer>
            <Header />
            <HomeBody>
              <SideBar />
              <HomeContent>
                <NotFoundContainer>
                  <NotFoundImg src={imgUrl} alt="not found" />
                  <NotFoundHeading isDark={isDark}>
                    Page Not Found
                  </NotFoundHeading>
                  <NotFoundDesc isDark={isDark}>
                    We are sorry the page you requested could not be found.
                  </NotFoundDesc>
                </NotFoundContainer>
              </HomeContent>
            </HomeBody>
          </ResponsiveHomeContainer>
        </HomeContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)
export default NotFound
