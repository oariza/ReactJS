import React, { Component } from "react";

import Header from "../../components/Header";
//import Card from "../../components/Card";

//import NewCreditCard from './components/NewCreditCard'

import "./CreditCard.css";

export default class Notes extends Component {
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

  render() {
    const { creditCardNumber, userName, expMonth, expYear} = this.state
    let numberSlice = creditCardNumber.slice(0,2)
    let brand = ''
    if (numberSlice >= 40 && numberSlice <= 49){
      brand = "Visa"
    }
    if (numberSlice >=51 && numberSlice <= 55){
      brand = "Mastercard"
    }     
    return (
      <div className="Container">
        <div>
          <Header
            title={"Credit Card"}
            description={
              "Credit Card Component"
            }
          />

          <div className='creditCard-bigcontainer'>
            <div className={`CreditCard-container-${brand}`}>            
              <p className= 'Number-container' >{creditCardNumber}</p>
              <div className='nameDate-container'>
                <p className= 'user-container' >{userName}</p>
                <p className= 'Date-container' >{expMonth}/{expYear}</p>
              </div>                          
            </div>

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
          </div>                 
        </div>
      </div>
    );
  }
}
