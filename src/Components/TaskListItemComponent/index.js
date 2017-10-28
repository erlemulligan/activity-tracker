import React from 'react'
import '../../../node_modules/foundation-sites/dist/css/foundation.css'
import './TaskListItemComponent.css'

const TaskListItemComponent = (props) => {
  return (
    <tr className="TaskListItemComponentContainer">
      <td>{props.userName}</td>
      <td>{props.userIdNumber}</td>
      <td>{props.startTime}</td>
      <td>{props.stopTime}</td>
      <td>{props.taskCategory}</td>
    </tr>
  );
}

export default TaskListItemComponent;
