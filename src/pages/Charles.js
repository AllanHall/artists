import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import charles from '../images/charles.jpg'

class Charles extends Component {
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
            <h2 className="name">CharlestheFirst</h2>
            <hr />
            <div className="album">
              <p>
                CharlestheFirst's most recent album, The Ascent, debuted in
                2018.
              </p>
              <a
                href="https://open.spotify.com/album/4yWMIuVAa9BFlCWTRHYOEp"
                target="_blank"
              >
                <img
                  className="image"
                  src={charles}
                  alt="the ascent album cover"
                />
              </a>
              <p>
                He is an up and comer and has been headlining more shows every
                year.
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

export default Charles
