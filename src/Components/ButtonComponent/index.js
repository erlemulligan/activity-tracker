import React from 'react';
import './ButtonComponent.css';

const ButtonComponent = (props) => {
  return (
    <button className="ButtonComponentContainer" onClick={props.onClick}>
      {props.buttonText}
    </button>
  );
}

export default ButtonComponent;
