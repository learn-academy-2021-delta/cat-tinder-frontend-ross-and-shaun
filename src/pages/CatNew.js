import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import {Redirect} from "react-router-dom"

class CatNew extends Component {
  constructor(props){
    super(props)
    this.state = {
      form: {
        name: "",
        age: "",
        enjoys: ""
      },
      submitted: false
    }
  }

  handleChange = (e) => {
    let { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({form: form})
  }

  handleSubmit = () => {
    this.props.createNewCat(this.state.form)
    this.setState({submitted: true})
  }

  render() {
    return (
      <>
        <h3>Add a new ThunderCat</h3>
        <Form>
          <FormGroup>
            <Label for="name">
              Cat's Name
            </Label>
            <Input
              name="name"
              type="text"
              onChange={this.handleChange}
              value={this.state.form.name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="age">
              Cat's Age
            </Label>
            <Input
              name="age"
              type="text"
              onChange={this.handleChange}
              value={this.state.form.age}
            />
          </FormGroup>
          <FormGroup>
            <Label for="enjoys">
              Cat's Hobbies and Enjoyment
            </Label>
            <Input
              name="enjoys"
              type="text"
              onChange={this.handleChange}
              value={this.state.form.enjoys}
            />
          </FormGroup>
          <Button
            onClick = {this.handleSubmit}
            name="submit"
          >
            Create New ThunderCat
          </Button>
        </Form>
        {this.state.submitted && <Redirect to="/catindex" />}
      </>
    )
  }
}
export default CatNew