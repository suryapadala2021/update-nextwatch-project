import styled from 'styled-components'

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`

export const FailureImage = styled.img`
  @media screen and (min-width: 768px) {
    width: 300px;
  }
  width: 200px;
`

export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#f1f1f1' : '#181818')};
  text-align: center;
  font-size: 20px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
export const FailureDescription = styled.p`
  font-family: 'Roboto';
  color: #475569;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
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
