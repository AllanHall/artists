import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import flume from '../images/flume.png'

class Flume extends Component {
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
            <h2 className="name">Flume</h2>
            <hr />
            <div className="album">
              <p>
                Flume came out with a new album/mixtape in 2019 titled "Hi This
                Is Flume"
              </p>
              <img className="image" src={flume} alt="album cover" />
              <p>His previous album was "Skin" which released in 2015.</p>
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

export default Flume
