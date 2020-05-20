import React, { Component } from "react";

import "./Conversor.css";

export default class Conversor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mxnCurrencyValue: 0,
      usdCurrencyValue: 0,
      eurCurrencyValue: 0,
    }
    this.handleMXN = this.handleMXN.bind(this)
  }

  handleMXN(event) {
    console.log(event.target.value)
    this.setState({
      mxnCurrencyValue: event.target.value,
      usdCurrencyValue: event.target.value,
      eurCurrencyValue: event.target.value
    })
  }
  
  render() {
    const { mxnCurrencyValue, usdCurrencyValue, eurCurrencyValue } = this.state

    return(      
      <div className='conversor-container'>
        <h2>Currency Value Converter Component</h2>
        <input value={mxnCurrencyValue} onChange={this.handleMXN} placeholder={'MXN'}/>Pesos mexicanos (MXN)
        <input value={usdCurrencyValue} onChange={this.handleMXN} placeholder={'MXN'}/>Pesos mexicanos (MXN)
        <input value={eurCurrencyValue} onChange={this.handleMXN} placeholder={'MXN'}/>Pesos mexicanos (MXN)        
      </div>
    )
  }
}