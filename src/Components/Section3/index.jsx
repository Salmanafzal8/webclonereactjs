import React from 'react'
import "./index.css"
import ContainedButton from '../ContainedButton'

const section3 = ({image,list,heading,paragraph,useSteps,reverse}) => {
  return (
    <div className={`section2-container ${reverse ? "reverse" : ""}`}>
            <div className="section3-image">
        <img src={image} alt="Section visual" />
      </div>
            <div className="section3-content">
              <h3 className="section3-subtitle">POWUR DIFFERENCE</h3>
              <div className="section3underline"></div>
              <h1 className="section3-heading">{heading}</h1>
              <p className="section3-paragraph">{paragraph}</p>
              <ul className="section3-list">
                {list.map((item, index) => (
                  <li key={index}>
                    {useSteps ? (
                      <span className="step-label">STEP {index + 1}</span>
                    ) : (
                      <span className="dot" />
                    )}
                    {item}
                  </li>
                ))}
              </ul>
              <div className="section3buttons">
                      <button
          style={{
            fontSize : "10px",
            opacity : "30%",
            backgroundColor: "white",
            color: "black",
            padding: "00px 40px",
            border: "1px solid ",
            borderRadius: "5px"
          }}
        >
          ENTER ZIP CODE
        </button>

              <ContainedButton  style={{ fontSize: "18px", padding : "10px 40px"  }}text={"Check Savings"}/>
            </div>
      </div>
    </div>
  )
}

export default section3
