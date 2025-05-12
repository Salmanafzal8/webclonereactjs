import React from "react";
import "./index.css";
import section4img1 from "../../assets/section4img1.png";
import section4img2 from "../../assets/section4img2.png";
import section4img3 from "../../assets/section4img3.png";

const Section6 = () => {
  return (
    <div className="section6">
      <div className="section6-card">
        <img src={section4img1} alt="Section" />
        <div className="overlay-box">
          <h3>THE BETTER WAY</h3>
          <div className="underline"> </div>
          <p>
            Find out how Powur helped these home entrepreneurs save money and live their lives.
          </p>
        </div>
      </div>

      <div className="section6-card">
        <img src={section4img2} alt="Section" />
        <div className="overlay-box">
          <h3>ENERGY AND INDEPENDENCE</h3>
          <div className="underline"></div>
          <p>
            Watch how this Powur customer got his independence back from his utility.
          </p>
        </div>
      </div>

      <div className="section6-card">
        <img src={section4img3} alt="Section" />
        <div className="overlay-box">
          <h3>SERVICES YOU TRUST</h3>
          <div className="underline"></div>
          <p>
            See why Powur sellers go above and beyond the norm.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section6;
