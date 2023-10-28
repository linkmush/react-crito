import React from 'react'

import paperz from '../assets/images/paperz.svg'
import dorfus from '../assets/images/dorfus.svg'
import martino from '../assets/images/martino.svg'
import square from '../assets/images/square.svg'
import gobona from '../assets/images/gobona.svg'

const LogosBoxes = ({ image }) => {

    let selectImg;

    switch (image) {
      case 'paperz':
        selectImg = paperz;
        break;
      case 'dorfus':
        selectImg = dorfus;
        break;
      case 'martino':
        selectImg = martino;
        break;
      case 'square':
        selectImg = square;
        break;
      case 'gobona':
        selectImg = gobona;
        break;
      default:
        selectImg = paperz;
        break;
    }
    
  return (
    <>
        <img src={selectImg} alt={`logo-${image}`} />
    </>
  )
}

export default LogosBoxes