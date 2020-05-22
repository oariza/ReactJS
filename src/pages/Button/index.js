import React, { Component } from "react";

import Header from "../../components/Header";

import "./Button.css";

export default class Button extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counterClick: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick() {
    console.log('Me clickeo')
    const { counterClick } = this.state
    this.setState({
      counterClick: counterClick + 1
    })
  }
  
  render() {
    return(
      <div className='Container'>
        <div>
          <Header
            title={"Counter"}
            description={
              "Counter Component"
            }
          />
          <div className='Button-container' >
            <p>Llevas {this.state.counterClick} clicks</p>
            <button onClick={this.handleClick}>Click me!</button>
          </div>        
        </div>         
      </div>
    )
  }
}