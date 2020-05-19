import React, { Component } from "react";



export default class Forms extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Quokka'
    }
    this.handleInputName = this.handleInputName.bind(this)
  }

  handleInputName(event) {
    console.log(event.target.value)
    this.setState({
      name: event.target.value,
    })
  }
  
  render() {
    return(
      <div className='form-container'>
        <input value={this.state.name} onChange={this.handleInputName} placeholder={'First Name'} />
        <input placeholder={'Last Name'} />
      </div>
    )
  }
}

