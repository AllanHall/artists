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
              <p className="album-info">
                Porter's last album, Worlds, came out in 2014.
              </p>
              <a
                href="https://open.spotify.com/album/7AJPV0L05IyIBid97AvwVD"
                target="_blank"
              >
                <img className="image" src={porter} alt="worlds album cover" />
              </a>
              <p className="album-info">
                He created a new alias called "Virtual Self", to pursue a
                different style of music.
              </p>
            </div>
            <h3>Check out his spotify by clicking the album image!</h3>
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
