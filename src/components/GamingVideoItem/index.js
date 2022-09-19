import {
  GameItem,
  GameImg,
  GameVideoHeading,
  GameVideoViews,
} from './styledcomonents'

const isDark = false
const GameVideoItem = props => {
  const {details} = props
  const {id, thumbnailUrl, title, viewCount} = details
  return (
    <GameItem>
      <GameImg src={thumbnailUrl} alt="video thumbnail" />
      <GameVideoHeading isDark={isDark}>{title}</GameVideoHeading>
      <GameVideoViews>{viewCount} watching worldwide</GameVideoViews>
    </GameItem>
  )
}
export default GameVideoItem
