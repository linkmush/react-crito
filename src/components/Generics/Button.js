import React from 'react'

const Button = ({ text, url }) => {
  return (
    <a className="btn-yellow" href={url}>
        {text}
        <ion-icon id="arrow" name="arrow-forward-outline"></ion-icon>
    </a>
  )
}

export default Button