import './App.css'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Nav from './components/Nav'
import Form from './components/Form'

function App() {
  return (
    <div className="App">
      <main>
        <Nav />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/new" component={Form} />
          <Route path="/idea/idea_id" component={Form} />
        </Switch>
      </main>
    </div>
  )
}

export default App
