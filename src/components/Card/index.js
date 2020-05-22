import React from "react";

// CSS
import './Card.css'

function Card({ brand, creditCardNumber, userName, expMonth, expYear }) {
  return (
    <div className={`CreditCard-container-${brand}`}>            
      <p className= 'Number-container' >{creditCardNumber}</p>
      <div className='nameDate-container'>
        <p className= 'user-container' >{userName}</p>
        <p className= 'Date-container' >{expMonth}/{expYear}</p>
      </div>                          
    </div>
  )
}

export default Card