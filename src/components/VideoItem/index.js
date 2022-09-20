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

import {Linker} from '../NavList/styledcomponent'
import NxtWatchContext from '../../context/NxtContext'

const VideoItem = props => {
  const {details, trending} = props
  const {id, channel, publishedAt, thumbnailUrl, title, viewCount} = details
  const {name, profileImageUrl} = channel
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <Linker to={`/videos/${id}`}>
            <VideoItemCard trending={trending}>
              <VideoThumbnail
                trending={trending}
                src={thumbnailUrl}
                alt="video thumbnail"
              />
              <VideoInfo isDark={isDark}>
                <ChannelLogo src={profileImageUrl} alt="channel logo" />
                <AboutVideo>
                  <VideoTitle isDark={isDark}>{title}</VideoTitle>
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
          </Linker>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
export default VideoItem
