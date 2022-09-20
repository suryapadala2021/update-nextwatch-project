import {AiFillFire} from 'react-icons/ai'
import {Component} from 'react'
import Cookies from 'js-cookie'
import SideBar from '../SideBar/index'
import LoaderComponent from '../LoaderContainer'
import VideoItem from '../VideoItem'
import FailureComponent from '../FailureView'
import NxtWatchContext from '../../context/NxtContext'

import {
  TrendingContainer,
  ResponsiveTrendingContainer,
  TredingBody,
  TrendingContent,
  TrendingBanner,
  TrendingBannerIconBox,
  TrendingBannerHeading,
  TrendingVideosList,
} from './styledcomponents'
import Header from '../Header'

const status = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}
class Trending extends Component {
  state = {apiStatus: status.loading, videosList: []}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: status.loading})
    const url = 'https://apis.ccbp.in/videos/trending'
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
        channel: {
          name: eachItem.channel.name,
          profileImageUrl: eachItem.channel.profile_image_url,
        },
        publishedAt: eachItem.published_at,
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

  renderLoadingView = () => <LoaderComponent />

  renderSuccessView = () => {
    const {videosList} = this.state
    return (
      <TrendingVideosList>
        {videosList.map(each => (
          <VideoItem trending key={each.id} details={each} />
        ))}
      </TrendingVideosList>
    )
  }

  renderFailureView = () => (
    <FailureComponent isFailureView callFunction={this.reloadTreding} />
  )

  reloadTreding = () => {
    this.getTrendingVideos()
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <TrendingContainer data-testid="trending" isDark={isDark}>
              <ResponsiveTrendingContainer>
                <Header />
                <TredingBody>
                  <SideBar />
                  <TrendingContent>
                    <TrendingBanner isDark={isDark} data-testid="banner">
                      <TrendingBannerIconBox isDark={isDark}>
                        <AiFillFire size="30" color="red" />
                      </TrendingBannerIconBox>
                      <TrendingBannerHeading isDark={isDark}>
                        Trending
                      </TrendingBannerHeading>
                    </TrendingBanner>
                    {this.display()}
                  </TrendingContent>
                </TredingBody>
              </ResponsiveTrendingContainer>
            </TrendingContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Trending
