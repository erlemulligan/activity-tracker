import React, { Component } from 'react';
import TimerComponent from './Components/TimerComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TimerComponent breakReminderInSeconds={6000} />
      </div>
    );
  }
}

export default App;
