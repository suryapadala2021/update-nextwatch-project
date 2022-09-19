import './App.css'
import {Switch, Route} from 'react-router-dom'
import Login from './components/LoginRoute'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import Protected from './components/ProtectedRoute/Protected'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Protected exact path="/" component={Home} />
    <Protected exact path="/trending" component={Trending} />
    <Protected exact path="/gaming" component={Gaming} />
  </Switch>
)

export default App
