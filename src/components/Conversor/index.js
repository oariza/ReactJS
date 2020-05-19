import React, { Component } from "react";

import "./Conversor.css";

export default class Conversor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mexicanCurrencyValue: 0,
    }
    this.handleMXN = this.handleMXN.bind(this)
  }

  handleMXN(event) {
    console.log(event.target.value)
    this.setState({
      mexicanCurrencyValue: event.target.value,
    })
  }
  
  render() {
    const { mexicanCurrencyValue } = this.state
    let usdCurrencyValue = mexicanCurrencyValue * 23.66
    return(      
      <div className='conversor-container'>
        <h2>Currency Value Converter Component</h2>
        <input value={mexicanCurrencyValue} onChange={this.handleMXN} placeholder={'MXN'}/>Pesos mexicanos (MXN)
        <p>Dólares estadounidenses (USD): {usdCurrencyValue}</p>
      </div>
    )
  }
}