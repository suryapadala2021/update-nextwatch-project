import Loader from 'react-loader-spinner'
import LoaderContainer from './styledcomponents'

import NxtWatchContext from '../../context/NxtContext'

const LoaderComponent = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark} = value
      return (
        <LoaderContainer className="loader-container" data-testid="loader">
          <Loader
            type="ThreeDots"
            color={isDark ? '#f9f9f9' : '#0f0f0f'}
            height="50"
            width="50"
          />
        </LoaderContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)
export default LoaderComponent
