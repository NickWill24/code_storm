import './App.css'
import { Switch, Route, NavLink } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <main>
        <Nav />
        <Switch>
          <Route path="/" component={Dashboard} />
        </Switch>
      </main>
    </div>
  )
}

export default App
