import React, { Component } from 'react';
import ButtonComponent from '../ButtonComponent';
import './TimerComponent.css';

class TimerComponent extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.state = {
      currentDate: new Date(),
      startDate: '',
      endDate: '',
      secondsElapsed: 0,
    }

    this.handleStart = this.handleStart.bind(this)
    this.handleStop = this.handleStop.bind(this)
    this.getSeconds = this.getSeconds.bind(this)
    this.getMinutes = this.getMinutes.bind(this)
    this.getHours = this.getHours.bind(this)
  }

  componentDidMount() {
    this.clockIncrementer = setInterval(
      () => this.setState({currentDate: new Date()}),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.clockIncrementer);
  }

  handleStart() {
    this.setState({
      startDate: new Date(),
      endDate: 'work currently in progress...'
    })

    this.timeIncrementer = setInterval(() => {
      this.setState({
        secondsElapsed: this.state.secondsElapsed + 1,
      })

      if (this.state.secondsElapsed % this.props.breakReminderInSeconds === 0) {
        alert('Do you need to take a break?')
      }
    }, 1000)
  }

  handleStop() {
    clearInterval(this.timeIncrementer)
    this.setState({
      secondsElapsed: 0,
      endDate: new Date(),
    })
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
        <h3>{`current date/time: ${this.state.currentDate}`}</h3>
        <h1>{`task timer: ${this.getHours()}:${this.getMinutes()}:${this.getSeconds()}`}</h1>
        <ButtonComponent buttonText="Start Working" onClick={this.handleStart}/>
        <ButtonComponent buttonText="Stop Working" onClick={this.handleStop} />
        <h3>{`start task date/time: ${this.state.startDate}`}</h3>
        <h3>{`end task date/time: ${this.state.endDate}`}</h3>
      </div>
    );
  }
}

TimerComponent.defaultProps = {
  breakReminderInSeconds: 5,
}

export default TimerComponent;
