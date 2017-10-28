import React, { Component } from 'react';
import TimerComponent from './Components/TimerComponent';
import '../node_modules/foundation-sites/dist/css/foundation.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App grid-container">
        <TimerComponent breakReminderInSeconds={30} />
      </div>
    );
  }
}

export default App;
