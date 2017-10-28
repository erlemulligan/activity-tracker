import React from 'react'
import FormattedDateComponent from '../FormattedDateComponent'
import '../../../node_modules/foundation-sites/dist/css/foundation.css'
import './TaskListItemComponent.css'

const TaskListItemComponent = (props) => {
  return (
    <tr className="TaskListItemComponentContainer">
      <td>{props.userName}</td>
      <td>{props.userIdNumber}</td>
      <td><FormattedDateComponent date={props.startTime}/></td>
      <td><FormattedDateComponent date={props.stopTime}/></td>
      <td>{props.taskCategory}</td>
    </tr>
  );
}

export default TaskListItemComponent;
