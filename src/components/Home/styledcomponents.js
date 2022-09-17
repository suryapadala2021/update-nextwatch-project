import styled from 'styled-components'

export const HomeContainer = styled.div``
export const Home = styled.p``
export const ResponsiveHomeContainer = styled.div``
export const HomeBanner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
`
export const HomeContent = styled.div``
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
  height: 45px;
  border-style: solid;
  border-color: #94a3b8;
  border-width: 1px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 15px;
  @media screen and (min-width: 768px) {
    width: 50%;
    margin: 25px;
    max-width: 600px;
  }
`
export const Search = styled.input`
  flex-grow: 1;
  height: 100%;
  border: none;
  color: #94a3b8;
  font-size: 18px;
  padding: 5px;
`
export const SearchBox = styled.div`
  width: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-left-style: solid;
  border-left-color: #94a3b8;
  border-width: 1px;
  height: 100%;
`
export const HomeBody = styled.div``
export const SearchButton = styled.button`
  background-color: transparent;
  border: none;
`
export const LoaderContainer = styled.div`
  text-align: center;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HomeVideosContainer = styled.ul`
  padding-left: 0px;
  list-style-type: none;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`

export const FailureImage = styled.img`
  width: 200px;
`

export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  color: #181818;
  text-align: center;
  font-size: 20px;
`
export const FailureDescription = styled.p`
  font-family: 'Roboto';
  color: #475569;
  text-align: center;
`
export const FailureButton = styled.button`
  border: none;
  font-family: 'Roboto';
  color: white;
  background-color: #4f46e5;
  border-radius: 5px;
  height: 30px;
  width: 70px;
`
