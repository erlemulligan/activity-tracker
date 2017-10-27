import React from 'react';
import './TaskListItemComponent.css';

const TaskListItemComponent = (props) => {
  return (
    <li className="TaskListItemComponentContainer">username: {props.userName} userid: {props.userIdNumber} start: {props.startTime} stop: {props.stopTime} category: {props.taskCategory}</li>
  );
}

export default TaskListItemComponent;
