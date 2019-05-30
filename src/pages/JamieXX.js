import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import jamie from '../images/jamie.png'

class JamieXX extends Component {
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
            <h2 className="name">Jamie XX</h2>
            <hr />
            <div className="album">
              <p>
                Jamie XX is the drummer for The XX and also has his own solo
                project.
              </p>
              <img className="image" src={jamie} alt="album cover" />
              <p>
                "In Colour" released in 2015 and was his only album ever
                released.
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

export default JamieXX
