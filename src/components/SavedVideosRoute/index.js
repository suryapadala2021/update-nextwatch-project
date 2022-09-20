import {BiListPlus} from 'react-icons/bi'
import NxtWatchContext from '../../context/NxtContext'
import Header from '../Header'
import SideBar from '../SideBar'
import FailureComponent from '../FailureView'
import VideoItem from '../VideoItem'

import {
  TrendingContainer,
  ResponsiveTrendingContainer,
  TredingBody,
  TrendingContent,
  TrendingBanner,
  TrendingBannerHeading,
  TrendingBannerIconBox,
  TrendingVideosList,
} from '../Trending/styledcomponents'

const SavedVideosRoute = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark, savedVideos} = value

      const renderEmptyView = () => <FailureComponent saved />
      const renderSavedVideos = () => (
        <TrendingVideosList>
          {savedVideos.map(each => (
            <VideoItem trending key={each.id} details={each} />
          ))}
        </TrendingVideosList>
      )

      const display = () => {
        if (savedVideos.length === 0) {
          return renderEmptyView()
        }
        return renderSavedVideos()
      }

      return (
        <TrendingContainer isDark={isDark}>
          <ResponsiveTrendingContainer>
            <Header />
            <TredingBody>
              <SideBar />
              <TrendingContent>
                <TrendingBanner isDark={isDark} data-testid="banner">
                  <TrendingBannerIconBox isDark={isDark}>
                    <BiListPlus size="30" color="red" />
                  </TrendingBannerIconBox>
                  <TrendingBannerHeading isDark={isDark}>
                    Saved Videos
                  </TrendingBannerHeading>
                </TrendingBanner>
                {display()}
              </TrendingContent>
            </TredingBody>
          </ResponsiveTrendingContainer>
        </TrendingContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)
export default SavedVideosRoute
