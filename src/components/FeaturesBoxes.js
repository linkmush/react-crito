import React from 'react';

const FeaturesBoxes = ({ image, title, text, customClass }) => {
  return (
    <div className={`article ${customClass}`}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default FeaturesBoxes