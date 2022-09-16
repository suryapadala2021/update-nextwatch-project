import styled from 'styled-components'

export const LoginContainer = styled.div`
  height: 100vh;
  background-color: ${props => (props.isDark ? '#181818' : '#f8fafc')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 768px) {
    align-items: center;
  }
`
export const LoginBox = styled.div`
  background-color: ${props => (props.isDark ? ' #0f0f0f' : '#f9f9f9')};
  padding: 20px;
  border-radius: 10px;
  @media screen and (min-width: 768px) {
    width: 90%;
    max-width: 500px;
    padding: 40px;
  }
`
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const LoginWebsiteIcon = styled.img`
  height: 40px;
  width: 140px;
  margin-bottom: 30px;
  align-self: center;
  @media screen and (min-width: 768px) {
    height: 60px;
    width: 200px;
  }
`
export const Label = styled.label`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? 'white' : '#94a3b8')};
  font-weight: 600;
`
export const Input = styled.input`
  font-size: 18px;
  margin-top: 5px;
  border-color: #f1f5f9;
  border-radius: 5px;
  border-width: 1px;
  color: ${props => (props.isDark ? 'white' : '#94a3b8')};
  background-color: transparent;
  padding: 5px;
  height: 50px;
  width: 100%;
  font-weight: 500;
`

export const InputBox = styled.div`
  margin-bottom: 30px;
`
export const InputCheck = styled.input`
  height: 25px;
  width: 25px;
  margin-right: 10px;
`
export const InputBoxShowPass = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`
export const LabelPass = styled.label`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? 'white' : '#181818')};
  font-weight: 500;
  font-size: 20px;
`
export const LoginButton = styled.button`
  font-family: 'Roboto';
  height: 45px;
  background-color: #3b82f6;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  font-size: 18px;
  @media screen and (min-width: 768px) {
    height: 55px;
  }
`
export const Error = styled.p`
  font-family: 'Roboto';
  color: red;
`
