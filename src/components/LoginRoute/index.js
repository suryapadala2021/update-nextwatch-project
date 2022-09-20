import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  LoginContainer,
  LoginBox,
  LoginForm,
  LoginWebsiteIcon,
  Label,
  Input,
  InputBox,
  InputCheck,
  InputBoxShowPass,
  LabelPass,
  LoginButton,
  Error,
} from './styledcomponents'

import NxtWatchContext from '../../context/NxtContext'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPass: false,
    responseStatus: 'initial',
    msg: '',
  }

  enteringUsername = event => {
    this.setState({username: event.target.value})
  }

  enteringPassword = event => {
    this.setState({password: event.target.value})
  }

  showPassword = event => {
    if (event.target.checked) {
      this.setState({showPass: true})
    } else {
      this.setState({showPass: false})
    }
  }

  login = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
    }
    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.setState({responseStatus: true})
      this.onSuccess(data.jwt_token)
    } else {
      this.setState({responseStatus: false, msg: data.error_msg})
    }
  }

  onSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  render() {
    const jwt = Cookies.get('jwt_token')
    if (jwt !== undefined) {
      return <Redirect to="/" />
    }
    const {username, password, showPass, responseStatus, msg} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <LoginContainer isDark={isDark}>
              <LoginBox isDark={isDark}>
                <LoginForm onSubmit={this.login}>
                  {!isDark && (
                    <LoginWebsiteIcon
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="website logo"
                    />
                  )}
                  {isDark && (
                    <LoginWebsiteIcon
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                      alt="website logo"
                    />
                  )}
                  <InputBox>
                    <Label htmlFor="username" isDark={isDark}>
                      USERNAME
                    </Label>
                    <br />
                    <Input
                      id="username"
                      value={username}
                      onChange={this.enteringUsername}
                      isDark={isDark}
                      type="text"
                      placeholder="Username"
                    />
                  </InputBox>
                  <InputBox>
                    <Label htmlFor="password" isDark={isDark}>
                      PASSWORD
                    </Label>
                    <br />
                    <Input
                      id="password"
                      value={password}
                      onChange={this.enteringPassword}
                      isDark={isDark}
                      type={showPass ? 'text' : 'password'}
                      placeholder="Password"
                    />
                  </InputBox>
                  <InputBoxShowPass>
                    <InputCheck
                      id="showPass"
                      type="checkbox"
                      onChange={this.showPassword}
                    />
                    <LabelPass htmlFor="showPass" isDark={isDark}>
                      Show Password
                    </LabelPass>
                  </InputBoxShowPass>
                  <LoginButton type="submit">Login</LoginButton>
                  {!responseStatus && <Error>*{msg}</Error>}
                </LoginForm>
              </LoginBox>
            </LoginContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
