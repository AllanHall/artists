import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import porter from '../images/porter.jpg'

class Porter extends Component {
  render() {
    return (
      <>
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
          <div className="content">
            <h2 className="name">Porter Robinson</h2>
            <hr />
            <div className="album">
              <p>Porter's last album, Worlds, came out in 2014.</p>
              <img className="image" src={porter} alt="album cover" />
              <p>
                He created a new alias called "Virtual Self", to pursue a
                different style of music.
              </p>
            </div>
          </div>
          <footer>
            <Link className="links" to="/">
              Home
            </Link>
          </footer>
        </div>
      </>
    )
  }
}

export default Porter
