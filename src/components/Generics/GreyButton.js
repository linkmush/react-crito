import React from 'react'
import { Link } from 'react-router-dom'

const GreyButton = ({ text, url }) => {
    return (
      <Link className="btn-grey" to={url}>
        {text}
      </Link>
    )
  }
  
  export default GreyButton