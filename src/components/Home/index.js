import {Component} from 'react'

import Header from '../Header'
import {
  HomeContainer,
  ResponsiveHomeContainer,
  HomeBanner,
  HomeContent,
} from './styledcomponents'

const isDark = false
class Home extends Component {
  render() {
    return (
      <HomeContainer data-testid="home">
        <ResponsiveHomeContainer>
          <Header />
          <HomeContent>
            <HomeBanner data-testid="banner">
              <BannerIcon />
            </HomeBanner>
          </HomeContent>
        </ResponsiveHomeContainer>
      </HomeContainer>
    )
  }
}
export default Home
