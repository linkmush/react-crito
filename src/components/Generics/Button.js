import React from 'react'

const Button = ({type, text, url }) => {

  const getButtonClassname = () => {
    switch (type) {
      case 'yellow':
        return 'btn-yellow'
      case 'black':
        return 'btn-black'
      default:
        return 'btn-transparent'

    }
  }

  return (
    <a className={getButtonClassname()} href={url}>{text}
        <ion-icon id="arrow" name="arrow-forward-outline"></ion-icon>
    </a>
  )
}

export default Button