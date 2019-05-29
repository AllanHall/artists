import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Porter extends Component {
  render() {
    return (
      <>
        <div>This is porters page</div>
        <footer>
          <Link to="/">Home</Link>
        </footer>
      </>
    )
  }
}

export default Porter
