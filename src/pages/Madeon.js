import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import madeon from '../images/madeon.jpg'

class Madeon extends Component {
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
            <h2 className="name">Madeon</h2>
            <hr />
            <div className="album">
              <p className="album-info">
                Madeon's last album was "Adventure" back in 2015.
              </p>
              <a
                href="https://open.spotify.com/album/3uKLwDjku2Us0c81LEmftR"
                target="_blank"
              >
                <img
                  className="image"
                  src={madeon}
                  alt="adventure album cover"
                />
              </a>
              <p className="album-info">
                He is rumored to be having a new album come out summer of 2019.
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

export default Madeon
