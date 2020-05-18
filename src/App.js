import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import Clock from './components/Clock/Clock'



export default class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Bootcamp white - <strong>React</strong>
          </h1>
          <Clock />
        </header>     
      </div>
    )
  }
}
