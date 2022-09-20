import {
  GameItem,
  GameImg,
  GameVideoHeading,
  GameVideoViews,
} from './styledcomonents'
import NxtWatchContext from '../../context/NxtContext'

import {Linker} from '../NavList/styledcomponent'

const GameVideoItem = props => {
  const {details} = props
  const {id, thumbnailUrl, title, viewCount} = details
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <Linker to={`/videos/${id}`}>
            <GameItem>
              <GameImg src={thumbnailUrl} alt="video thumbnail" />
              <GameVideoHeading isDark={isDark}>{title}</GameVideoHeading>
              <GameVideoViews>{viewCount} watching worldwide</GameVideoViews>
            </GameItem>
          </Linker>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
export default GameVideoItem
