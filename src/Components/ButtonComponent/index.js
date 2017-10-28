import React from 'react'
import '../../../node_modules/foundation-sites/dist/css/foundation.css'
import './ButtonComponent.css'

const ButtonComponent = (props) => {
  return (
    <button className="button" onClick={props.onClick}>
      {props.buttonText}
    </button>
  );
}

export default ButtonComponent;
