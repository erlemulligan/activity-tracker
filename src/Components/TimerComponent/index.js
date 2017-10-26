import React, { Component } from 'react';
import ButtonComponent from '../ButtonComponent';
import './TimerComponent.css';

class TimerComponent extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.state = {
      date: new Date(),
      secondsElapsed: 0,
    }

    this.handleStart = this.handleStart.bind(this)
    this.handleStop = this.handleStop.bind(this)
    this.getSeconds = this.getSeconds.bind(this)
    this.getMinutes = this.getMinutes.bind(this)
    this.getHours = this.getHours.bind(this)
  }

  handleStart() {
    this.timeIncrementer = setInterval(() => {
      this.setState({secondsElapsed: this.state.secondsElapsed + 1})

      if (this.state.secondsElapsed === this.props.breakReminderInSeconds) {
        alert('Do you need to take a break?')
      }
    }, 1000)
  }

  handleStop() {
    clearInterval(this.timeIncrementer)
    this.setState({secondsElapsed: 0})
  }

  getHours() {
    return ('0' + Math.floor(this.state.secondsElapsed / 3600)).slice(-2)
  }

  getMinutes() {
    return ('0' + Math.floor(this.state.secondsElapsed / 60) % 60).slice(-2)
  }

  getSeconds() {
    return ('0' + this.state.secondsElapsed % 60).slice(-2)
  }

  render() {
    return (
      <div className="TimerComponentContainer">
        <h1>{`${this.getHours()}:${this.getMinutes()}:${this.getSeconds()}`}</h1>
        <ButtonComponent buttonText="Start" onClick={this.handleStart}/>
        <ButtonComponent buttonText="Stop" onClick={this.handleStop} />
      </div>
    );
  }
}

TimerComponent.defaultProps = {
  breakReminderInSeconds: 5,
}

export default TimerComponent;
