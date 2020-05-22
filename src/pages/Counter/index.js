import React, { Component } from "react";

import Header from "../../components/Header";

import "./Counter.css";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    this.countInterval = setInterval(() => this.count(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.countInterval);
  }

  componentDidUpdate(){
    if(this.state.counter === 20){
      clearInterval(this.countInterval);
    }
  }

  count() {
    let { counter } = this.state
    this.setState({
      counter: counter + 1,
    });
  }

  render() {
    const {counter} = this.state
    if (this.state.counter % 8 === 0) {
      console.log(this.state.counter);
    }
    return (
      <div className="Container">
        <div>
          <Header
            title={"Counter"}
            description={
              "Counter Component"
            }
          />
          <div className='Counter-container'>
          <p>Contador: {counter}</p>
          </div>
        </div>
      </div>
    );
  }
}