import styled from 'styled-components'

export const VideoItemCard = styled.li`
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    width: 300px;
    margin: 10px;
  }
`
export const VideoThumbnail = styled.img`
  width: 100%;
  margin-bottom: 5px;
`
export const VideoInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 5px;
`
export const ChannelLogo = styled.img`
  height: 30px;
  margin-top: 5px;
  margin-right: 10px;
`
export const VideoTitle = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#f1f1f1' : '#212121')};
  font-size: 14px;
  margin-bottom: 0px;
  margin-top: 5px;
  line-height: 0.6cm;
`

export const AboutVideo = styled.div``
export const VideoDetailsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const VideoDetail = styled.p`
  font-family: 'Roboto';
  color: #616e7c;
  font-size: 12px;
`
