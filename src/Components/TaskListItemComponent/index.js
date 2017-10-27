import React from 'react';
import './TaskListItemComponent.css';

const TaskListItemComponent = (props) => {
  return (
    <li className="TaskListItemComponentContainer">start: {props.startTime} stop: {props.stopTime}</li>
  );
}

export default TaskListItemComponent;
