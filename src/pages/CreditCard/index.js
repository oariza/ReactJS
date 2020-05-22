import React, { Component } from "react";

import Header from "../../components/Header";
//import Card from "../../components/Card";

import NewCreditCard from './components/NewCreditCard'

import "./CreditCard.css";

export default class CreditCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardInfo: {}
    };
    this.handleInfo = this.handleInfo.bind(this)      
  }

  handleInfo(cardInfo) {
    this.setState({
      cardInfo
    })    
  }

  render() {
    let { cardInfo } = this.state    
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
            <div className={`CreditCard-container-${cardInfo.brand}`}>            
              <p className= 'Number-container' >{cardInfo.creditCardNumber}</p>
              <div className='nameDate-container'>
                <p className= 'user-container' >{cardInfo.userName}</p>
                <p className= 'Date-container' >{cardInfo.expMonth}/{cardInfo.expYear}</p>
              </div>                          
            </div>
            <NewCreditCard
              handleInfo={this.handleInfo}
            />
            
          </div>                 
        </div>
      </div>
    );
  }
}
