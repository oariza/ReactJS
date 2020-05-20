import React, { Component } from 'react';
import logo from './Group.svg';
import './App.css';

// Components
import Conversor from './components/Conversor'


export default class App extends Component {
    render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Bootcamp white - <strong>React</strong>
          </h1>
          <Conversor />
        </header>        
      </div>
    )
  }
}
