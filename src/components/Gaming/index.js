import {Component} from 'react'
import {AiFillHeart} from 'react-icons/ai'
import Cookies from 'js-cookie'
import Header from '../Header'
import SideBar from '../SideBar'
import LoaderComponent from '../LoaderContainer'
import GameVideoItem from '../GamingVideoItem'
import FailureComponent from '../FailureView'
import NxtWatchContext from '../../context/NxtContext'

import {
  GameContainer,
  ResponsiveGameContainer,
  GamingBody,
  GamingVideosList,
  GamingContent,
} from './styledcomponents'

import {
  TrendingBanner,
  TrendingBannerIconBox,
  TrendingBannerHeading,
} from '../Trending/styledcomponents'
import VideoItem from '../VideoItem'

const status = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {apiStatus: status.loading, videosList: []}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: status.loading})
    const url = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedData = data.videos.map(eachItem => ({
        id: eachItem.id,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        videosList: updatedData,
        apiStatus: status.success,
      })
    } else {
      this.setState({
        apiStatus: status.failure,
      })
    }
  }

  display = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case status.loading:
        return this.renderLoadingView()
      case status.success:
        return this.renderSuccessView()
      default:
        return this.renderFailureView()
    }
  }

  retryGaming = () => {
    this.getGamingVideos()
  }

  renderLoadingView = () => <LoaderComponent />

  renderSuccessView = () => {
    const {videosList} = this.state
    return (
      <GamingVideosList>
        {videosList.map(each => (
          <GameVideoItem key={each.id} details={each} />
        ))}
      </GamingVideosList>
    )
  }

  renderFailureView = () => (
    <FailureComponent callFunction={this.retryGaming} isFailureView />
  )

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <GameContainer data-testid="gaming" isDark={isDark}>
              <ResponsiveGameContainer>
                <Header />
                <GamingBody>
                  <SideBar />
                  <GamingContent>
                    <TrendingBanner isDark={isDark} data-testid="banner">
                      <TrendingBannerIconBox isDark={isDark}>
                        <AiFillHeart size="30" color="red" />
                      </TrendingBannerIconBox>
                      <TrendingBannerHeading isDark={isDark}>
                        Gaming
                      </TrendingBannerHeading>
                    </TrendingBanner>
                    {this.display()}
                  </GamingContent>
                </GamingBody>
              </ResponsiveGameContainer>
            </GameContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default Gaming
