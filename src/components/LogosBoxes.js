import React, { useState, useEffect } from 'react'

import paperz from '../assets/images/paperz.svg'
import dorfus from '../assets/images/dorfus.svg'
import martino from '../assets/images/martino.svg'
import square from '../assets/images/square.svg'
import gobona from '../assets/images/gobona.svg'

const LogosBoxes = ({ image }) => {
    const [selectedImage, setSelectedImage] = useState()

    useEffect(() => {
        //console.log('useEffect körs');
        switch (image) {
            case 'paperz':
                setSelectedImage(paperz);
                break;
            case 'dorfus':
                setSelectedImage(dorfus);
                break;
            case 'martino':
                setSelectedImage(martino);
                break;
            case 'square':
                setSelectedImage(square);
                break;
            case 'gobona':
                setSelectedImage(gobona);
                break;
            default:
                setSelectedImage(paperz);
                break;
        }
        //console.log('useEffect rendera bilder:', image);
    }, [])

    return (
        <img src={selectedImage} alt={`logo-${image}`} />
    )
}

export default LogosBoxes