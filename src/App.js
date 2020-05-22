import React, { Component } from 'react';

//External Packages
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import Home from './pages/Home'
import Menu from './pages/Menu'
import Card from './pages/Card'
import Clock from './pages/Clock'
import Counter from './pages/Counter'
import Button from './pages/Button'
import Notes from './pages/Notes'
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
            <Route exact path="/clock">
              <Clock />
            </Route>
            <Route exact path="/counter">
              <Counter />
            </Route>
            <Route exact path="/button">
              <Button />
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
