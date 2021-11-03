import React, { Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


import cats from './mockCats.js'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import CatIndex from './pages/CatIndex'
import CatShow from './pages/CatShow'
import CatNew from './pages/CatNew'
import CatEdit from './pages/CatEdit'
import NotFound from './pages/NotFound'

import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      cats: [],
    }
  }

componentDidMount(){
  this.readCat()
}

readCat = () => {
  fetch("http://localhost:3000/cats")
  .then(response => response.json())
  .then(catsArray => this.setState({cats: catsArray}))
  .catch(errors => console.log("Cat read errors:", errors))
}

createNewCat = (newCat) => {
  fetch("http://localhost:3000/cats", {
    body: JSON.stringify(newCat),
    headers: {
      "Content-Type" : "application/json"
    },
    method: "POST"
  })
  .then(response => response.json())
  .then(payload => this.readCat())
  .catch(errors => (console.log(errors)))
}

updateCat = (editedCat, id) => {
  fetch(`http://localhost:3000/cats/${id}`,{
    body: JSON.stringify(editedCat),
    headers: {
      "Content-Type" : "application/json"
    },
    method: "PATCH"
  })
  .then(response => response.json())
  .then(payload => this.readCat())
  .catch(errors => (console.log(errors)))
}

deleteCat = (id) => {
  fetch(`http://localhost:3000/cats/${id}`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "DELETE"
  })
  .then(response => response.json())
  .then(payload => this.readCat())
  .catch(errors => console.log("delete errors:", errors))
}

  render() {

    return(
      <>
       <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route 
            path="/catindex" 
            render={(props) => <CatIndex cats={this.state.cats} />} />
          <Route 
            path="/catshow/:id"
            render={(props) => {
              let id = props.match.params.id
              let cat = this.state.cats.find(value => value.id === parseInt(id))
              console.log(cat)
              return <CatShow cat={cat} deleteCat={this.deleteCat}/>
            }}
           />
          <Route 
            path="/catnew" 
            render={(props) => <CatNew 
            createNewCat={this.createNewCat} />} />
             <Route
              path="/catedit/:id"
              render={(props) => {
                let id = props.match.params.id
                let cat = this.state.cats.find(c => c.id === +id)
                return <CatEdit cat={cat} updateCat={this.updateCat } id={id} />
              }}
            />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>

      </>
    )
  }
}

export default App;
