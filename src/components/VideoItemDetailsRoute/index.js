import {Component} from 'react'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import ReactPlayer from 'react-player'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import SideBar from '../SideBar'
import LoadingComponent from '../LoaderContainer'

import NxtWatchContext from '../../context/NxtContext'
import {
  ChannelInfoBox,
  VideoDetailsContainer,
  ResponsiveVideoBox,
  VideoDetailsTitle,
  VideDetailsViews,
  LikeAndDislikeBox,
  VideoItemDetailsInfoBox,
  LikeAndDislikeBtn,
  LikeContainer,
  LikeText,
  VideoDetailsChannelContainer,
  ChannelProfile,
  ChannelName,
  VideoItemDetailsTextContainer,
  ChannelSubscribers,
} from './styledcomponents'

import {
  FailureButton,
  FailureContainer,
  FailureDescription,
  FailureHeading,
  FailureImage,
} from '../FailureView/styledcomponents'

import {
  ResponsiveTrendingContainer,
  TrendingContainer,
  TredingBody,
  TrendingContent,
} from '../Trending/styledcomponents'
import Header from '../Header'
import {AboutVideo} from '../VideoItem/styledcomponent'

const status = {
  loading: 'loading',
  success: 'success',
  failure: 'failure',
}
const videoStatus = {
  initial: 'INITIAL',
  like: 'Like',
  disLike: 'DISLIKE',
}

class VideoItemDetailsRoute extends Component {
  state = {
    apiStatus: status.loading,
    videoDetails: {},
    videoSta: videoStatus.initial,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: status.loading})
    const jwtToken = Cookies.get('jwt_token')

    const {match} = this.props
    const {params} = match
    const {id} = params

    const urls = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(urls, options)
    const data = await response.json()

    if (response.ok === true) {
      const updatedData = {
        videoDetails: data.video_details,
      }
      const {videoDetails} = updatedData
      const updated = {
        id: videoDetails.id,
        description: videoDetails.description,
        publishedAt: videoDetails.published_at,
        thumbnailUrl: videoDetails.thumbnail_url,
        title: videoDetails.title,
        videoUrl: videoDetails.video_url,
        viewCount: videoDetails.view_count,
        channel: {
          name: videoDetails.channel.name,
          profileImageUrl: videoDetails.channel.profile_image_url,
          subscriberCount: videoDetails.channel.subscriber_count,
        },
      }
      this.setState({
        videoDetails: updated,
        apiStatus: status.success,
      })
    } else {
      this.setState({apiStatus: status.failure})
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

  retryVideoDetails = () => {
    this.getVideoDetails()
  }

  changeVideoStatus = sta => {
    const {videoSta} = this.state
    if (sta === videoSta) {
      this.setState({videoSta: videoStatus.initial})
    } else {
      this.setState({videoSta: sta})
    }
  }

  renderLoadingView = () => <LoadingComponent />

  renderSuccessView = () => {
    const {videoDetails, videoSta} = this.state
    console.log(videoSta)
    const {
      publishedAt,
      title,
      videoUrl,
      viewCount,
      channel,
      description,
      id,
    } = videoDetails
    const {name, profileImageUrl, subscriberCount} = channel
    let postedAt = formatDistanceToNow(new Date(publishedAt))
    const postedAtList = postedAt.split(' ')
    if (postedAtList.length === 3) {
      postedAtList.shift()
      postedAt = postedAtList.join(' ')
    }
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark, addToSavedVideos, savedVideos} = value
          const isSaved = savedVideos.find(each => each.id === videoDetails.id)
          const saveButtonStatus = () => {
            addToSavedVideos(videoDetails)
          }
          return (
            <VideoDetailsContainer>
              <ResponsiveVideoBox>
                <ReactPlayer
                  url={videoUrl}
                  controls
                  width="100%"
                  height="100%"
                />
              </ResponsiveVideoBox>
              <VideoItemDetailsTextContainer>
                <VideoDetailsTitle isDark={isDark}>{title}</VideoDetailsTitle>
                <VideoItemDetailsInfoBox>
                  <VideDetailsViews>{viewCount} Views</VideDetailsViews>
                  <BsDot color="#616e7c" />
                  <VideDetailsViews>{postedAt} ago</VideDetailsViews>
                </VideoItemDetailsInfoBox>
                <LikeAndDislikeBox>
                  <LikeAndDislikeBtn
                    onClick={() => {
                      this.changeVideoStatus(videoStatus.like)
                    }}
                    isActive={videoSta === videoStatus.like}
                  >
                    <AiOutlineLike size="26" /> Like
                  </LikeAndDislikeBtn>
                  <LikeAndDislikeBtn
                    onClick={() => {
                      this.changeVideoStatus(videoStatus.dislike)
                    }}
                    isActive={videoSta === videoStatus.dislike}
                  >
                    <AiOutlineDislike size="24" /> DisLike
                  </LikeAndDislikeBtn>
                  <LikeAndDislikeBtn
                    isActive={isSaved !== undefined}
                    onClick={saveButtonStatus}
                  >
                    <LikeContainer>
                      <BiListPlus size="26" />{' '}
                      <LikeText>
                        {isSaved !== undefined ? 'saved' : 'Save'}
                      </LikeText>
                    </LikeContainer>
                  </LikeAndDislikeBtn>
                </LikeAndDislikeBox>
                <hr />
                <VideoDetailsChannelContainer>
                  <ChannelProfile src={profileImageUrl} alt="channel logo" />
                  <ChannelInfoBox>
                    <ChannelName isDark={isDark}>{name}</ChannelName>
                    <ChannelSubscribers>
                      {subscriberCount} subscribers
                    </ChannelSubscribers>
                  </ChannelInfoBox>
                </VideoDetailsChannelContainer>
                <ChannelSubscribers desc isDark>
                  {description}
                </ChannelSubscribers>
              </VideoItemDetailsTextContainer>
            </VideoDetailsContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderFailureView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        const imgUrl = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <FailureContainer>
            <FailureImage src={imgUrl} alt="failure view" />
            <FailureHeading isDark={isDark}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureDescription>
              We are having some trouble to complete your request. Please try
              again.
            </FailureDescription>
            <FailureButton type="button" onClick={this.getVideoDetails}>
              Retry
            </FailureButton>
          </FailureContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <TrendingContainer data-testid="videoItemDetails" isDark={isDark}>
              <ResponsiveTrendingContainer>
                <Header />
                <TredingBody>
                  <SideBar />
                  <TrendingContent>{this.display()}</TrendingContent>
                </TredingBody>
              </ResponsiveTrendingContainer>
            </TrendingContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default VideoItemDetailsRoute
