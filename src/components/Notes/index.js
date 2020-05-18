import React, { Component } from "react";

export default class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      newNote: {}
    }
  }

  handleChange(event){
    console.log(event.target.value)
  }


  render() {
    return (
      <div>
        <div className='notes'>
          <p>Nota 1</p>
          <p>Nota 2</p>        
        </div>
        <div>
          <input onChange={event => this.handleChange(event)} placeholder={'Titulo'}></input>
          <input onChange={event => this.handleChange(event)} placeholder={'Content'}></input>
        </div>        
      </div>      
    )
  }
}

