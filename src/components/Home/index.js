import {Component} from 'react'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import Cookies from 'js-cookie'
import LoaderComponent from '../LoaderContainer'

import SideBar from '../SideBar/index'
import Header from '../Header'
import VideoItem from '../VideoItem'
import FailureComponent from '../FailureView'

import {
  HomeContainer,
  ResponsiveHomeContainer,
  HomeBanner,
  HomeContent,
  BannerImg,
  BannerMatter,
  BannerButton,
  BannerContent,
  BannerCloseBtn,
  SearchContainer,
  Search,
  SearchBox,
  HomeBody,
  SearchButton,
  HomeVideosContainer,
} from './styledcomponents'

const status = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const isDark = false
class Home extends Component {
  state = {
    apiStatus: status.loading,
    search: '',
    videoList: [],
    showBanner: true,
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  changeSearch = event => {
    this.setState({search: event.target.value})
  }

  searching = () => {
    this.getHomeVideos()
  }

  closeBanner = () => {
    this.setState({showBanner: false})
  }

  retryHome = () => {
    this.getHomeVideos()
  }

  getHomeVideos = async () => {
    this.setState({apiStatus: status.loading})
    const {search} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${search}`
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
        videoList: updatedData,
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

  renderFailureView = () => (
    <FailureComponent callFunction={this.retryHome} isFailureView />
  )

  displayVideoContainer = () => {
    const {videoList} = this.state
    return (
      <HomeVideosContainer>
        {videoList.map(each => (
          <VideoItem key={each.id} details={each} />
        ))}
      </HomeVideosContainer>
    )
  }

  displayEmptyView = () => <FailureComponent callFunction={this.retryHome} />

  renderSuccessView = () => {
    const {videoList} = this.state
    if (videoList.length === 0) {
      return this.displayEmptyView()
    }
    return this.displayVideoContainer()
  }

  render() {
    const {search, showBanner} = this.state
    return (
      <HomeContainer data-testid="home" isDark={isDark}>
        <ResponsiveHomeContainer>
          <Header />
          <HomeBody>
            <SideBar isDark={isDark} />
            <HomeContent>
              {showBanner && (
                <HomeBanner data-testid="banner">
                  <BannerContent>
                    <BannerImg
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="nxt watch logo"
                    />
                    <BannerMatter>
                      Buy Nxt Watch Premium prepaid plans with UPI
                    </BannerMatter>
                    <BannerButton type="button" data-testid="searchButton">
                      GET IT NOW
                    </BannerButton>
                  </BannerContent>
                  <BannerCloseBtn
                    type="button"
                    data-testid="close"
                    onClick={this.closeBanner}
                  >
                    <AiOutlineClose size="22" />
                  </BannerCloseBtn>
                </HomeBanner>
              )}
              <SearchContainer>
                <Search
                  value={search}
                  type="search"
                  placeholder="Search"
                  onChange={this.changeSearch}
                />
                <SearchBox isDark={isDark}>
                  <SearchButton type="button" onClick={this.searching}>
                    <AiOutlineSearch size="22" />
                  </SearchButton>
                </SearchBox>
              </SearchContainer>
              {this.display()}
            </HomeContent>
          </HomeBody>
        </ResponsiveHomeContainer>
      </HomeContainer>
    )
  }
}
export default Home
