import React from 'react';

const SectionTitle = ({ title, description, titleClassName, descriptionClassName }) => {
  const descriptionLines = description.split('\n')

  return (
    <>
      <p className={titleClassName}>{title}</p>
      <h2 className={descriptionClassName}>
        {descriptionLines.map((line, index) => (
          <span key={index}>
            {line}
            {index < descriptionLines.length - 1 && <br />}
          </span>
        ))}
      </h2>
    </>
  )
}

export default SectionTitle