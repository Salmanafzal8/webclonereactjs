import React from 'react';
import "./index.css";

const HeroCard = ({ herocardheading, image }) => {
  return (
    <div
      className="herocard"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="herocard-overlay">
        <h1>
          {herocardheading}
          <div className="herounderline"></div>
        </h1>
      </div>
    </div>
  );
};
 export default HeroCard
