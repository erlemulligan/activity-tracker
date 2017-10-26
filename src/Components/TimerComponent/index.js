import React, { Component } from 'react';
import ButtonComponent from '../ButtonComponent';
import './TimerComponent.css';

class TimerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};

    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);
  }

  handleStart() {
    alert('starting...')
  }

  handleStop() {
    alert('stopping...')
  }

  render() {
    return (
      <div className="TimerComponentContainer">
        <h1>0:00</h1>
        <ButtonComponent buttonText="Start" onClick={this.handleStart}/>
        <ButtonComponent buttonText="Stop" onClick={this.handleStop} />
      </div>
    );
  }
}

export default TimerComponent;
