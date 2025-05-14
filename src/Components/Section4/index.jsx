import React from 'react';
import './index.css';

const Section4 = ({ image, heading, paragraph, list, reverse }) => {
  return (
    <div className={`section4container ${reverse ? 'reverse' : ''}`}>
      <div className="section4-image">
        <img className="section4img" src={image} alt="Section visual" />
      </div>
      <div className="section4-content">
        <h3 className="section4-subtitle">POWUR DIFFERENCE</h3>
        <div className="section4underline"></div>
        <h1 className="section4-heading">{heading}</h1>
        <p className="section4-paragraph">{paragraph}</p>
        <ul className="section4-list">
          {list.map((item, index) => (
            <li key={index}>
              <span className="dot"></span>
              <span className="dot-text">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Section4;
