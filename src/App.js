import './App.css'
import {Switch, Route} from 'react-router-dom'
import Login from './components/LoginRoute'
import Home from './components/Home'

// Replace your code here
const App = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/" component={Home} />
  </Switch>
)

export default App
