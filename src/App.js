import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import JamieXX from './pages/JamieXX'
import Flume from './pages/Flume'
import Porter from './pages/Porter'
import Charles from './pages/Charles'
import Kaskade from './pages/Kaskade'
import Madeon from './pages/Madeon'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/JamieXX" exact component={JamieXX} />
            <Route path="/Flume" exact component={Flume} />
            <Route path="/Porter" exact component={Porter} />
            <Route path="/Charles" exact component={Charles} />
            <Route path="/Kaskade" exact component={Kaskade} />
            <Route path="/Madeon" exact component={Madeon} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
