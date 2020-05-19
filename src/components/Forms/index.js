import React, { Component } from "react";

import "./forms.css";

export default class Forms extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: ''

    }
    this.handleInputFirstName = this.handleInputFirstName.bind(this)
    this.handleInputLastName = this.handleInputLastName.bind(this)
  }

  handleInputFirstName(event) {
    console.log(event.target.value)
    this.setState({
      firstName: event.target.value
    })
  }

  handleInputLastName(event) {
    console.log(event.target.value)
    this.setState({
      lastName: event.target.value
    })
  }
  
  render() {
    return(
      <div className='form-container'>
        <h2>Form Component</h2>
        <input value={this.state.firstName} onChange={this.handleInputFirstName} placeholder={'First Name'} />
        <input value={this.state.lastName} onChange={this.handleInputLastName} placeholder={'Last Name'} />
      </div>
    )
  }
}

