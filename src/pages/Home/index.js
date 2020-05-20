import React from "react";

import Header from '../../components/Header'

import "./Home.css";

function Home() {
  return (
    <div className='Container'>
      <div>
        <Header
          title={'Kodemia módulo 3'}
          description={'Aquí aprenderemos React JS'}
           />
      </div>    
    </div>
  )
}

export default Home;
