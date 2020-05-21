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
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput({ target: {name,value} }) {
    let currencyMXN = 0
    let currencyUSD = 0
    let currencyEUR = 0
    if (name === "mxnCurrencyValue") {
      currencyMXN = value
      currencyUSD = value / 23.12
      currencyEUR = value / 25.37
    } else if (name === "usdCurrencyValue") {
      currencyMXN = value * 23.12
      currencyUSD = value
      currencyEUR = value * 0.91
    } else {
      currencyMXN = value * 25.37
      currencyUSD = value / 1.10
      currencyEUR = value
    }
    this.setState({
      mxnCurrencyValue: currencyMXN,
      usdCurrencyValue: currencyUSD,
      eurCurrencyValue: currencyEUR
    });
  }
  
  render() {
    let { mxnCurrencyValue, usdCurrencyValue, eurCurrencyValue } = this.state
    return(      
      <div className='conversor-container'>
        <h2>Currency Value Converter Component</h2>
        <input type='number' value={mxnCurrencyValue} onChange={this.handleInput} placeholder={'MXN'} name={"mxnCurrencyValue"}/> Pesos mexicanos (MXN)
        <input type='number' value={usdCurrencyValue} onChange={this.handleInput} placeholder={'USD'} name={"usdCurrencyValue"}/> Dólares Estadounidenses (USD)
        <input type='number' value={eurCurrencyValue} onChange={this.handleInput} placeholder={'EUR'} name={"eurCurrencyValue"}/> Euros (EUR)
      </div>
    )
  }
}
