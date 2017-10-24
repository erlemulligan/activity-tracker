import React, { Component } from 'react';
import ButtonComponent from '../ButtonComponent';
import './TimerComponent.css';

class TimerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="TimerComponentContainer">
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <ButtonComponent buttonText="Start" />
        <ButtonComponent buttonText="Stop" />
      </div>
    );
  }
}

export default TimerComponent;
