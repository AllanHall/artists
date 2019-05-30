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
              <p>Madeon's last album was "Adventure" back in 2015.</p>
              <img className="image" src={madeon} alt="album cover" />
              <p>
                He is rumored to be having a new album come out summer of 2019.
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

export default Madeon