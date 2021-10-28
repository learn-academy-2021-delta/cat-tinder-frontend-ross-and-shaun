import React, { Component } from 'react'
import notCat from '../assets/mummra.jpeg'

class NotFound extends Component {
  render() {
    return (
      <div className="page-body">
        <h3>Ooops, no cats here!</h3>
        <img src={notCat} alt="mummra" className="cat-friend" />
      </div>
    )
  }
}

export default NotFound