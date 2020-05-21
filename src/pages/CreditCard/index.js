import React, { Component } from "react";

import Header from "../../components/Header";

import "./CreditCard.css";

export default class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: 'Visa',
      creditCardNumber: 1234567891234567,
      userName: 'OMAR ARIZA',
      expMonth: '12',
      expYear: '23'
    };
  }

  render() {
    let { brand, creditCardNumber, userName, expMonth, expYear} = this.state
    return (
      <div className="Container">
        <div>
          <Header
            title={"Credit Card"}
            description={
              "Credit Card Component"
            }
          />
          <div className="CreditCard-container">
            <div className= 'Brand-container' >{brand}</div>
            <div className= 'Number-container' >{creditCardNumber}</div>
            <div className= 'user-container' >{userName}</div>
            <div className= 'Date-container' >{expMonth}/{expYear}</div>            
          </div>
        </div>
      </div>
    );
  }
}