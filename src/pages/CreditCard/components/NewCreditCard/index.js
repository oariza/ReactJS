import React, { Component } from "react";

import "./NewCreditCard.css"

export default class NewCreditCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creditCardNumber: '',
      userName: '',
      expMonth: 0,
      expYear: 0
    };
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput({target: {name, value}}) {
    this.setState({
      [name]: value
    })    
  }

  addCard(event) {
    event.preventDefault()    
    const { creditCardNumber, userName, expMonth, expYear} = this.state
    let numberSlice = creditCardNumber.slice(0,2)
    let brand
    if (numberSlice >= 40 && numberSlice <= 49){
      brand = "Visa"
    }
    if (numberSlice >=51 && numberSlice <= 55){
      brand = "Mastercard"
    } 
    const card = {
      creditCardNumber,
      userName,
      expMonth,
      expYear,
      brand
    }
    this.props.handlerNewCard(card)
  }

  render() {
    const { creditCardNumber, userName, expMonth, expYear} = this.state      
    return (
      <div>
        <form>            
          <input
            value={creditCardNumber}
            onChange={this.handleInput}
            placeholder={"Credit Card number"}
            name={"creditCardNumber"}
          />
          <input
            value={userName}
            onChange={this.handleInput}
            placeholder={"Name"}
            name={"userName"}
          />
          <input
            value={expMonth}
            onChange={this.handleInput}
            placeholder={"Expiration Month"}
            name={"expMonth"}
          />
          <input
            value={expYear}
            onChange={this.handleInput}
            placeholder={"Expiration Year"}
            name={"expYear"}
          />
        </form>
      </div>
    );
  }
}