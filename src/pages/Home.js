import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to my site, click these links to artists</h1>
        <section>
          <Link to="/JamieXX">Jamie XX</Link>
          <Link to="/Flume">Flume</Link>
          <Link to="/Porter">Porter</Link>
          <Link to="/Charles">CharlestheFirst</Link>
          <Link to="/ZedsDead">Zeds Dead</Link>
        </section>
      </div>
    )
  }
}

export default Home
