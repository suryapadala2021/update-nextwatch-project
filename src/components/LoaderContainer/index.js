import Loader from 'react-loader-spinner'
import LoaderContainer from './styledcomponents'

const isDark = false
const LoaderComponent = () => (
  <LoaderContainer className="loader-container" data-testid="loader">
    <Loader
      type="ThreeDots"
      color={isDark ? '#f9f9f9' : '#0f0f0f'}
      height="50"
      width="50"
    />
  </LoaderContainer>
)
export default LoaderComponent
