import React from 'react';
import './ButtonComponent.css';

const ButtonComponent = (props) => {
  return (
    <span className="ButtonComponentContainer" onClick={props.onClick}>
      {props.buttonText}
    </span>
  );
}

export default ButtonComponent;
