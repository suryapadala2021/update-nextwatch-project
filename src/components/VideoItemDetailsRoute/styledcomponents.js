import styled from 'styled-components'

export const VideoDetailsContainer = styled.div``

export const ResponsiveVideoBox = styled.div`
  height: 200px;
  @media screen and (min-width: 768px) {
    height: 300px;
  }
  @media screen and (min-width: 992px) {
    height: 400px;
  }
`
export const VideoDetailsTitle = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? 'white' : '#231f20')};
  font-size: 18px;
`
export const VideDetailsViews = styled.p`
  font-family: 'Roboto';
  color: #616e7c;
  font-size: 14px;
`
export const VideoItemDetailsInfoBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const LikeAndDislikeBox = styled.div``
export const LikeAndDislikeBtn = styled.button`
  background-color: transparent;
  border: none;
  margin-right: 15px;
  color: ${props => (props.isActive ? '#2563eb' : '#64748b')};
`
export const LikeContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const LikeText = styled.p`
  font-family: 'Roboto';
  font-weight: 600;
  margin-left: 5px;
  font-size: 14px;
`
export const VideoDetailsChannelContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const ChannelProfile = styled.img`
  height: 50px;
  margin-right: 10px;
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? 'white' : ' #231f20')};
`
export const ChannelSubscribers = styled.p`
  font-family: 'Roboto';
  color: ${props => {
    if (props.isDark && props.desc) {
      return 'white'
    }
    return '#616e7c'
  }};
  font-size: 14px;
`
export const ChannelInfoBox = styled.div``
export const VideoItemDetailsTextContainer = styled.div`
  padding: 15px;
`
