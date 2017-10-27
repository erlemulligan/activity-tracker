import React, { Component } from 'react'
import ButtonComponent from '../ButtonComponent'
import TaskListItemComponent from '../TaskListItemComponent'
import './TimerComponent.css';

class TimerComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentDate: new Date(),
      startDate: '',
      endDate: '',
      secondsElapsed: 0,
      userName: 'User Name',
      userIdNumber: '12345',
      taskList: [],
    }

    this.handleStart = this.handleStart.bind(this)
    this.handleStop = this.handleStop.bind(this)
    this.handleUserNameChange = this.handleUserNameChange.bind(this)
    this.handleUserIdNumberChange = this.handleUserIdNumberChange.bind(this)
    this.getSeconds = this.getSeconds.bind(this)
    this.getMinutes = this.getMinutes.bind(this)
    this.getHours = this.getHours.bind(this)
    this.displayTaskList = this.displayTaskList.bind(this)
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

  handleUserNameChange(event) {
    this.setState({
      userName: event.target.value
    })
  }

  handleUserIdNumberChange(event) {
    this.setState({
      userIdNumber: event.target.value
    })
  }

  handleStart() {
    this.setState({
      startDate: new Date(),
      endDate: 'work currently in progress...',
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

    const stopEndDate = new Date()
    let tempTaskArray = this.state.taskList

    tempTaskArray.push({start: this.state.startDate.toString(), stop: stopEndDate.toString(), userName: this.state.userName, userIdNumber: this.state.userIdNumber})

    this.setState({
      secondsElapsed: 0,
      endDate: stopEndDate,
      taskList: tempTaskArray,
    })

    console.log(this.state.taskList)
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

  displayTaskList() {

    const taskListArray = this.state.taskList

    const taskListDisplay = taskListArray.map((task) => {
      return <TaskListItemComponent key={task.start} startTime={task.start} stopTime={task.stop} userName={task.userName} userIdNumber={task.userIdNumber} />
    })

    return (<ul>{taskListDisplay}</ul>)
  }

  render() {
    return (
      <div className="TimerComponentContainer">
        <form>
          <label>name:</label>
          <input type="text" value={this.state.userName} onChange={this.handleUserNameChange}/>
          <label>user id #:</label>
          <input type="text" value={this.state.userIdNumber} onChange={this.handleUserIdNumberChange}/>
        </form>
        <h3>{`current date/time: ${this.state.currentDate}`}</h3>
        <h1>{`task timer: ${this.getHours()}:${this.getMinutes()}:${this.getSeconds()}`}</h1>
        <ButtonComponent buttonText="Start Working" onClick={this.handleStart}/>
        <ButtonComponent buttonText="Stop Working" onClick={this.handleStop} />
        <h3>{`start task date/time: ${this.state.startDate}`}</h3>
        <h3>{`end task date/time: ${this.state.endDate}`}</h3>
        {this.displayTaskList()}
        {this.state.userName}
        {this.state.userIdNumber}
      </div>
    );
  }
}

TimerComponent.defaultProps = {
  breakReminderInSeconds: 6000,
}

export default TimerComponent
