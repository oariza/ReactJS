import React, { Component } from 'react';

import Header from "../../components/Header";

import "./Clock.css";

export default class Clock extends Component {
  // declaración de estado
  constructor (props) {
    super(props)
    this.state = {
      date: new Date(),
      name: 'Omar'
    }
  }

  //montar componente
  componentDidMount(){
    this.dateInterval = setInterval(() => this.tick(), 1000)
    
    
  }
  
  //desmontar componente
  componentWillUnmount(){
    clearInterval(this.dateInterval)

  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render () {
    console.log('Desde el render')
    return (
      <div className="Container">
        <div>
          <Header
            title={"Credit Card"}
            description={
              "Credit Card Component"
            }
          />
          <div className='Time-container'>
            <p>{this.state.name}</p>
            <p>La hora exacta es: {this.state.date.toLocaleTimeString()}</p>
          </div>          
        </div>        
      </div>
    );
  }
}