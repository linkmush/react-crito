import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ type, text, url }) => {
  
  const getButtonClassname = () => {
    switch (type) {
      case 'yellow':
        return 'btn-yellow'
      case 'black':
        return 'btn-black'
      case 'grey':
        return 'btn-grey'
      default:
        return 'btn-transparent'
    }
  }

  return (
    <Link className={`btn ${getButtonClassname()}`} to={url}>
      {text}
      <ion-icon id="arrow" name="arrow-forward-outline"></ion-icon>
    </Link>
  )
}

export default Button;