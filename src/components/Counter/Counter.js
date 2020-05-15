import React, { Component } from "react";

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
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    if (this.state.counter % 8 === 0) {
      console.log(this.state.counter);
    }
    return (
      <div>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}
