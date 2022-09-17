import {Component} from 'react'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'
import Header from '../Header'
import VideoItem from '../VideoItem'

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
  FailureContainer,
  Search,
  SearchBox,
  HomeBody,
  SearchButton,
  LoaderContainer,
  HomeVideosContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  FailureButton,
} from './styledcomponents'

const status = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const isDark = false
class Home extends Component {
  state = {apiStatus: status.loading, search: '', videoList: []}

  componentDidMount() {
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
        apiStatus: status.failure,
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

  renderLoadingView = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader
        type="ThreeDots"
        color={isDark ? '#f9f9f9' : '#0f0f0f'}
        height="50"
        width="50"
      />
    </LoaderContainer>
  )

  renderFailureView = () => (
    <FailureContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureDescription>
        We are having some trouble to complete your request.please try again.
      </FailureDescription>
      <FailureButton>Retry</FailureButton>
    </FailureContainer>
  )

  renderSuccessView = () => {
    const {videoList} = this.state
    return (
      <HomeVideosContainer>
        {videoList.map(each => (
          <VideoItem key={each.id} details={each} />
        ))}
      </HomeVideosContainer>
    )
  }

  render() {
    return (
      <HomeContainer data-testid="home">
        <ResponsiveHomeContainer>
          <Header />
          <HomeBody>
            <HomeContent>
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
                <BannerCloseBtn type="button">
                  <AiOutlineClose size="22" />
                </BannerCloseBtn>
              </HomeBanner>
              <SearchContainer>
                <Search type="search" placeholder="Search" />
                <SearchBox>
                  <SearchButton>
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
