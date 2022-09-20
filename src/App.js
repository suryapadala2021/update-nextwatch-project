import './App.css'
import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'
import Login from './components/LoginRoute'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import Protected from './components/ProtectedRoute/Protected'
import VideoItemDetailsRoute from './components/VideoItemDetailsRoute'
import SavedVideosRoute from './components/SavedVideosRoute'
import NextWatchContext from './context/NxtContext'
import NotFound from './components/NotFound'

// Replace your code here

class App extends Component {
  state = {isDark: false, savedVideos: [], activeTab: 'HOME'}

  changeActiveTab = id => {
    this.setState({activeTab: id})
  }

  changeTheme = () => {
    this.setState(prev => ({isDark: !prev.isDark}))
  }

  addToSavedVideos = videoDetails => {
    const {savedVideos} = this.state
    const findVideo = savedVideos.find(each => videoDetails.id === each.id)
    if (findVideo === undefined) {
      this.setState(prev => ({
        savedVideos: [...prev.savedVideos, videoDetails],
      }))
    } else {
      const filtered = savedVideos.filter(each => each.id !== videoDetails.id)
      this.setState({savedVideos: filtered})
    }
  }

  render() {
    const {isDark, savedVideos, activeTab} = this.state
    return (
      <NextWatchContext.Provider
        value={{
          isDark,
          savedVideos,
          activeTab,
          changeActiveTab: this.changeActiveTab,
          changeTheme: this.changeTheme,
          addToSavedVideos: this.addToSavedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <Protected exact path="/" component={Home} />
          <Protected exact path="/trending" component={Trending} />
          <Protected exact path="/gaming" component={Gaming} />
          <Protected
            exact
            path="/videos/:id"
            component={VideoItemDetailsRoute}
          />
          <Protected exact path="/saved-videos" component={SavedVideosRoute} />
          <Route component={NotFound} />
        </Switch>
      </NextWatchContext.Provider>
    )
  }
}

export default App
