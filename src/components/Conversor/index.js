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
    this.setState({
      [name]: value,
    });
  }
  
  render() {
    let { mxnCurrencyValue, usdCurrencyValue, eurCurrencyValue } = this.state
    mxnCurrencyValue = usdCurrencyValue * 24

    return(      
      <div className='conversor-container'>
        <h2>Currency Value Converter Component</h2>
        <input value={mxnCurrencyValue} onChange={this.handleInput} placeholder={'MXN'} name={"mxnCurrencyValue"}/> Pesos mexicanos (MXN)
        <input value={usdCurrencyValue} onChange={this.handleInput} placeholder={'USD'} name={"usdCurrencyValue"}/> Dólares Estadounidenses (USD)
        <input value={eurCurrencyValue} onChange={this.handleInput} placeholder={'EUR'} name={"eurCurrencyValue"}/> Euros (EUR)
      </div>
    )
  }
}