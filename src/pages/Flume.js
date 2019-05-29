import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Flume extends Component {
  render() {
    return (
      <>
        <div>This is flume's page</div>
        <footer>
          <Link to="/">Home</Link>
        </footer>
      </>
    )
  }
}

export default Flume
