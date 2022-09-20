import {Component} from 'react'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import ReactPlayer from 'react-player'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import SideBar from '../SideBar'
import LoadingComponent from '../LoaderContainer'
import FailureComponent from '../FailureView'
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
    saveButtonActive: false,
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
    const {videoDetails, videoSta, saveButtonActive} = this.state
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
          const {isDark, addToSavedVideos} = value
          const saveButtonStatus = () => {
            this.setState({saveButtonActive: !saveButtonActive})
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
                    <LikeContainer>
                      <AiOutlineLike size="26" /> <LikeText>Like</LikeText>
                    </LikeContainer>
                  </LikeAndDislikeBtn>
                  <LikeAndDislikeBtn
                    onClick={() => {
                      this.changeVideoStatus(videoStatus.dislike)
                    }}
                    isActive={videoSta === videoStatus.dislike}
                  >
                    <LikeContainer>
                      <AiOutlineDislike size="24" />{' '}
                      <LikeText>DisLike</LikeText>
                    </LikeContainer>
                  </LikeAndDislikeBtn>
                  <LikeAndDislikeBtn
                    isActive={saveButtonActive}
                    onClick={saveButtonStatus}
                  >
                    <LikeContainer>
                      <BiListPlus size="26" /> <LikeText>Save</LikeText>
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
    <FailureComponent callFunction={this.retryVideoDetails} isFailureView />
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
