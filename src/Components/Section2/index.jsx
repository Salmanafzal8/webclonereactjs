import React from "react";
import "./index.css";
import logo1 from "../../assets/Section2logo1.png"
import logo2 from "../../assets/Section2logo2.png"
import logo3 from "../../assets/Section2logo3.png"

const Section2 = ({
  image,
  heading,
  paragraph,
  list,
  reverse = false,
  useSteps = false,
}) => {
  return (
    <div className={`section2-container ${reverse ? "reverse" : ""}`}>
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
              {useSteps ? (
                <span className="step-label">STEP {index + 1}</span>
              ) : (
                <span className="dot" />
              )}
              {item}
            </li>
          ))}
        </ul>
                    <div className="logos">
                      <img src={logo1} alt="" />
                      <img src={logo2} alt="" />
                      <img src={logo3} alt="" />
                    </div>

      </div>
    </div>
  );
};

export default Section2;
