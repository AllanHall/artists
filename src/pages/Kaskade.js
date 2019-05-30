import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import kaskade from '../images/kaskade.jpg'

class Kaskade extends Component {
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
            <h2 className="name">Kaskade</h2>
            <hr />
            <div className="album">
              <p>
                Kaskade's most recent album was "Automatic" and it released in
                2015.
              </p>
              <img className="image" src={kaskade} alt="album cover" />
              <p>He also released a Christmas themed EP in 2017.</p>
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

export default Kaskade
