import React, { Component } from 'react';

//External Packages
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import Home from './pages/Home'
import Notes from './pages/Notes'
import Menu from './pages/Menu'

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
            <Route exact path="/notes">
              <Notes />
            </Route>
            <Route exact path="/holi">
              <h1>Holi</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
