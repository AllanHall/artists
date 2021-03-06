import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div>
        <header>The Music Space</header>
        <section className="Nav">
          <Link className="links" to="/JamieXX">
            Jamie XX
          </Link>
          <Link className="links" to="/Flume">
            Flume
          </Link>
          <Link className="links" to="/Porter">
            Porter Robinson
          </Link>
          <Link className="links" to="/Charles">
            CharlestheFirst
          </Link>
          <Link className="links" to="/Kaskade">
            Kaskade
          </Link>
          <Link className="links" to="/Madeon">
            Madeon
          </Link>
        </section>
        <div className="tagline">
          <div>Expand Your Music Library</div>
          <div className="logo">【=◈︿◈=】</div>
        </div>
        <footer className="home-footer">
          <Link className="links" to="/">
            Home
          </Link>
        </footer>
      </div>
    )
  }
}

export default Home
