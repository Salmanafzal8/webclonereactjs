import React from 'react'
import "./index.css"

const DescriptionHeading = ({description,heading}) => {
  return (
    <div className='descriptionheading'>
      <h2>{heading}</h2>
      <p>{description}</p>
    </div>
  )
}

export default DescriptionHeading
