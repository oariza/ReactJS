import React, { Component } from 'react';

//External Packages
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import Home from './pages/Home'
import Card from './pages/Card'
import Notes from './pages/Notes'
import Menu from './pages/Menu'
import CreditCard from './pages/CreditCard'

import "./App.css"

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Menu />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/cards">
              <Card />
            </Route>
            <Route exact path="/notes">
              <Notes />
            </Route>
            <Route exact path="/credit-card">
              <CreditCard />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}
