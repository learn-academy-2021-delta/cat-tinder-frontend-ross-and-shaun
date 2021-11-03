import React, { Component } from 'react'
import tCatHeader from '../assets/tcatheader.jpeg'

class Home extends Component {
  render() {
    return (
      <div className="page-body">
        <h3>Welcome to ThunderCat Tinder!</h3>
        <br />
        <h4>It's like Tinder, but for ThunderCats.</h4>
        <br />
        <img src={tCatHeader} alt="thundercats assembled" className="tCatHeader" />
      </div>
    )
  }
}
export default Home