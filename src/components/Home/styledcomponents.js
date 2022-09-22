import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9 ')};
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export const Home = styled.p``
export const ResponsiveHomeContainer = styled.div`
  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: 1300px;
  }
`
export const HomeBanner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
`
export const HomeContent = styled.div`
  @media screen and (min-width: 768px) {
    flex-grow: 1;
  }
`
export const BannerImg = styled.img`
  height: 40px;
`
export const BannerMatter = styled.p`
  font-family: 'Roboto';
  color: #1e293b;
  font-size: 24px;
  font-weight: 500;
`
export const BannerButton = styled.button`
  font-family: 'Roboto';
  border-color: #1e293b;
  color: #1e293b;
  background-color: transparent;
  font-size: 20px;
  font-weight: 600;
  height: 50px;
  width: 160px;
`
export const BannerContent = styled.div`
  width: 50%;
`
export const BannerCloseBtn = styled.button`
  border: none;
  background-color: transparent;
`
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 0px 8px 0px;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`
export const SearchInput = styled.input`
  height: 30px;
  flex-grow: 1;
  border: 1px solid ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  padding-left: 10px;
  background-color: transparent;
  outline: none;
`

export const HomeBody = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`
export const SearchButton = styled.button`
  background-color: transparent;
  height: 30px;
  width: 70px;
  padding-top: 4px;
  border: 1px solid ${props => (props.isDark ? '#f9f9f9' : '#181818')};
`

export const HomeVideosContainer = styled.ul`
  padding-left: 0px;
  list-style-type: none;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
  }
`
export const FailureHomeButton = styled.button`
  border: none;
  font-family: 'Roboto';
  color: white;
  background-color: #4f46e5;
  border-radius: 5px;
  height: 30px;
  width: 70px;
`
export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: white;
  border: none;
  width: 100px;
  height: 30px;
  margin-top: 10px;
  border-radius: 5px;
`
