import React, { Component } from 'react';
import logo from './Group.svg';
import './App.css';

// Components
import Button from './components/Button'
import Notes from './components/Notes'

export default class App extends Component {
    render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Bootcamp white - <strong>React</strong>
          </h1>
          <Button />
          <Notes />
        </header>        
      </div>
    )
  }
}
