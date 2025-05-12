import React from 'react'
import "./index.css"

const section4 = ({image,heading,paragraph,list,reverse}) => {
  return (
    <div className={`section4container ${reverse ? "reverse" : ""}`}>
                  <div className="section2-image">
        <img src={image} alt="Section visual" />
      </div>
            <div className="section2-content">
        <h3 className="section2-subtitle">POWUR DIFFERENCE</h3>
        <div className="section2underline"></div>
        <h1 className="section2-heading">{heading}</h1>
        <p className="section2-paragraph">{paragraph}</p>
        <ul className="section2-list">
          {list.map((item, index) => (
            <li key={index}>

                <span className="dot" />

              {item}
            </li>
          ))}
        </ul>

      </div>
    </div>
  )
}

export default section4
