import React, { Component } from "react";

import "./NewCreditCard.css"

export default class NewCreditCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creditCardNumber: '',
      userName: '',
      expMonth: 0,
      expYear: 0,
      brand: ''
    };
    this.handleInput = this.handleInput.bind(this)
    this.sendInfo = this.sendInfo.bind(this) 
  }

  handleInput({target: {name, value}}) {
    let { creditCardNumber, brand} = this.state
    let numberSlice = creditCardNumber.slice(0,2)
    if (numberSlice >= 40 && numberSlice <= 49){
      brand = "Visa"
    }
    if (numberSlice >=51 && numberSlice <= 55){
      brand = "Mastercard"
    }
    this.setState({
      [name]: value,
      brand
    }, this.sendInfo)    
  }

  sendInfo() {
    this.props.handleInfo(this.state)
  }


  render() {
    const { creditCardNumber, userName, expMonth, expYear } = this.state  
    return (
      <div>
        <form className='creditCard-formContainer'>            
          <input
            className='ccNumber'
            value={creditCardNumber}
            onChange={this.handleInput}
            placeholder={'Credit Card number'}
            name={'creditCardNumber'}
          />
          <input
            className='ccName'
            value={userName}
            onChange={this.handleInput}
            placeholder={"Name"}
            name={"userName"}
          />
          <input
            className='ccMonth'
            value={expMonth}
            onChange={this.handleInput}
            placeholder={"Expiration Month"}
            name={"expMonth"}
          />
          <input 
            className='ccYear'
            value={expYear}
            onChange={this.handleInput}
            placeholder={"Expiration Year"}
            name={"expYear"}
          />
        </form>
      </div>
    )
  }
}
