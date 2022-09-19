import styled from 'styled-components'

export const TrendingContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : ' #f9f9f9  ')};
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export const ResponsiveTrendingContainer = styled.div`
  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: 1300px;
  }
`
export const TredingBody = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`
export const TrendingContent = styled.div`
  @media screen and (min-width: 768px) {
    flex-grow: 1;
  }
`
export const TrendingBannerIconBox = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f1f5f9')};
  border-radius: 30px;
  margin-right: 15px;
`
export const TrendingBanner = styled.div`
  background-color: #f1f1f1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  background-color: ${props => (props.isDark ? '#181818' : '#e2e8f0')};
`
export const TrendingBannerHeading = styled.h1`
  font-family: 'Roboto';
  color: #231f20;
  font-size: 22px;
  font-weight: bold;
  color: ${props => (props.isDark ? '#f9f9f9' : '#1e293b')};
`
export const TrendingVideosList = styled.ul`
  padding-left: 0px;
  list-style-type: none;
`
