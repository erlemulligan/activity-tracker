import React from 'react';
import './ButtonComponent.css';

const ButtonComponent = (props) => {
  return (
    <span className="ButtonComponentContainer">
      {props.buttonText}
    </span>
  );
}

export default ButtonComponent;
