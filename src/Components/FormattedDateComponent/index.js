import React from 'react'
import '../../../node_modules/foundation-sites/dist/css/foundation.css'
import './FormattedDateComponent.css'

const FormattedDateComponent = (props) => {

  const displayFormattedDate = (dateToFormat) => {

    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour12: 'true', hour: 'numeric', minute: '2-digit', second: '2-digit' }

    const formattedDate = dateToFormat.toLocaleDateString('en-US', dateOptions)

    return formattedDate

  }

  if (props.date) {
    return (
      <span>
        {`
          ${displayFormattedDate(props.date)}
        `}
      </span>
    );
  } else {
    return false
  }
}

export default FormattedDateComponent;
