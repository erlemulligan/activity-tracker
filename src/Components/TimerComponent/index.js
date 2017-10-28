import React, { Component } from 'react'
import ButtonComponent from '../ButtonComponent'
import FormattedDateComponent from '../FormattedDateComponent'
import TaskListItemComponent from '../TaskListItemComponent'
import '../../../node_modules/foundation-sites/dist/css/foundation.css'
import './TimerComponent.css';

class TimerComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentDate: new Date(),
      startDate: '',
      endDate: '',
      secondsElapsed: 0,
      userName: '',
      userIdNumber: '',
      taskCategory: 'Uncategorized',
      taskList: [],
    }

    this.handleStart = this.handleStart.bind(this)
    this.handleStop = this.handleStop.bind(this)
    this.handleUserNameChange = this.handleUserNameChange.bind(this)
    this.handleUserIdNumberChange = this.handleUserIdNumberChange.bind(this)
    this.handleTaskCategoryChange = this.handleTaskCategoryChange.bind(this)
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

  handleTaskCategoryChange(event) {
    this.setState({
      taskCategory: event.target.value
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

    tempTaskArray.push({start: this.state.startDate, stop: stopEndDate, userName: this.state.userName, userIdNumber: this.state.userIdNumber, taskCategory: this.state.taskCategory})

    this.setState({
      secondsElapsed: 0,
      endDate: stopEndDate,
      taskList: tempTaskArray,
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

  displayTaskList() {

    const taskListArray = this.state.taskList

    const taskListDisplay = taskListArray.map((task) => {
      return <TaskListItemComponent key={task.start} startTime={task.start} stopTime={task.stop} userName={task.userName} userIdNumber={task.userIdNumber} taskCategory={task.taskCategory}/>
    })

    return (
            <div className="table-scroll">
              <table className="hover hoverScrollTable">
                <thead>
                  <tr>
                    <th width="200">User Name</th>
                    <th width="200">User ID#</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                    <th>Category</th>
                  </tr>
                </thead>
                <tbody>
                  {taskListDisplay}
                </tbody>
              </table>
            </div>
           )
  }

  render() {
    return (
      <div className="TimerComponentContainer grid-x grid-padding-x">

        <div className="cell topClock">
          <FormattedDateComponent date={this.state.currentDate}/>
        </div>

        <div className="input-group cell small-12 medium-4">
          <span className="input-group-label">User Name</span>
          <input className="input-group-field" type="text" value={this.state.userName} onChange={this.handleUserNameChange}/>
        </div>

        <div className="input-group cell small-12 medium-4">
          <span className="input-group-label">User ID#</span>
          <input className="input-group-field" type="text" value={this.state.userIdNumber} onChange={this.handleUserIdNumberChange}/>
        </div>

        <div className="input-group cell small-12 medium-4">
          <span className="input-group-label">Category</span>
          <select className="input-group-field" onChange={this.handleTaskCategoryChange}>
            <option value="Uncategorized">Uncategorized</option>
            <option value="Development">Development</option>
            <option value="Communication">Communication</option>
            <option value="Meeting">Meeting</option>
            <option value="Break">Break</option>
          </select>
        </div>

        <div className="cell small-12">
          <ButtonComponent buttonText="Start Working" onClick={this.handleStart}/>
          <ButtonComponent buttonText="Stop Working" onClick={this.handleStop} />
        </div>

        <div className="cell">
          <h1>{`task timer: ${this.getHours()}:${this.getMinutes()}:${this.getSeconds()}`}</h1>

          <h3>start time</h3>
          <FormattedDateComponent date={this.state.startDate}/>
          <h3>end time</h3>
          {this.state.endDate.getMonth &&
            <FormattedDateComponent date={this.state.endDate}/>
          }
          {!this.state.endDate.getMonth &&
            <div>{this.state.endDate}</div>
          }

          {this.displayTaskList()}
        </div>
      </div>
    );
  }
}

TimerComponent.defaultProps = {
  breakReminderInSeconds: 6000,
}

export default TimerComponent
