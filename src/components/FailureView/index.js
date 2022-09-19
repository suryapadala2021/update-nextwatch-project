import {
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  FailureButton,
} from './styledcomponents'

const isDark = false
const FailureComponent = props => {
  const {callFunction, isFailureView} = props
  const imgUrl = isFailureView
    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png'
  const altValue = isFailureView ? 'failure view' : 'no saved videos'
  const Heading = isFailureView
    ? 'Oops! Something Went Wrong'
    : ' No Search results found'
  const description = isFailureView
    ? 'We are having some trouble to complete your request.please try again.'
    : 'Try different key words or remove search filter'
  return (
    <FailureContainer>
      <FailureImage src={imgUrl} alt={altValue} />
      <FailureHeading isDark={isDark}>{Heading}</FailureHeading>
      <FailureDescription>{description}</FailureDescription>
      <FailureButton type="button" onClick={callFunction}>
        Retry
      </FailureButton>
    </FailureContainer>
  )
}
export default FailureComponent
