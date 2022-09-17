import {BsDot} from 'react-icons/bs'

import {
  VideoItemCard,
  VideoThumbnail,
  VideoInfo,
  ChannelLogo,
  VideoTitle,
  AboutVideo,
  VideoDetailsContainer,
  VideoDetail,
} from './styledcomponent'

const VideoItem = props => {
  const {details} = props
  const {id, channel, publishedAt, thumbnailUrl, title, viewCount} = details
  const {name, profileImageUrl} = channel
  return (
    <VideoItemCard>
      <VideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
      <VideoInfo>
        <ChannelLogo src={profileImageUrl} alt="channel logo" />
        <AboutVideo>
          <VideoTitle>{title}</VideoTitle>
          <VideoDetailsContainer>
            <VideoDetail>{name}</VideoDetail>
            <BsDot size="20" color=" #616e7c" />
            <VideoDetail>{publishedAt}</VideoDetail>
            <BsDot size="20" color=" #616e7c" />
            <VideoDetail>{viewCount}</VideoDetail>
          </VideoDetailsContainer>
        </AboutVideo>
      </VideoInfo>
    </VideoItemCard>
  )
}
export default VideoItem
