import {
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  FailureButton,
} from './styledcomponents'

import NxtWatchContext from '../../context/NxtContext'

const FailureComponent = props => {
  const {callFunction, isFailureView, saved} = props

  return (
    <NxtWatchContext.Consumer>
      {value => {
        let imgUrl =
          'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png'
        let altValue = 'no videos'
        let Heading = ' No Search results found'

        let desc = 'Try different key words or remove search filter'
        const {isDark} = value
        if (isFailureView) {
          imgUrl =
            'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          altValue = 'failure view'
          Heading = 'Oops! Something Went Wrong'
          desc =
            'We are having some trouble to complete your request. Please try again'
        } else if (saved) {
          imgUrl =
            'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png'
          altValue = 'no saved videos'
          Heading = 'No Saved Videos Found'
          desc =
            'You can save your videos  while watching them Save your videos by clicking a button'
        }

        return (
          <FailureContainer>
            <FailureImage src={imgUrl} alt={altValue} />
            <FailureHeading isDark={isDark}>{Heading}</FailureHeading>
            <FailureDescription>{desc}</FailureDescription>
            <FailureButton type="button" onClick={callFunction} saved={saved}>
              Retry
            </FailureButton>
          </FailureContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
export default FailureComponent
