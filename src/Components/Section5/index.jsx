import React from "react";
import section3logo1 from "./../../assets/section3logo.svg";
import section3logo2 from "./../../assets/section3logo1.png";
import section3logo3 from "./../../assets/section3logo3.svg";

import "./index.css";
const Section5 = () => {
  return (
    <div className="section5">
      <div className="section5__container1">
        <img src={section3logo1} alt="logo" />
        <text>
          "Powur lets people add solar to homes with no upfront costs"
        </text>
      </div>
      <div className="section5__container2">
        <img src={section3logo2} alt="logo" />
        <text>
          "Powur ranks No. 43 on the Inc. 5000 list of Fastest-Growing
          Companies"
        </text>
      </div>
      <div className="section5__container3">
        <img src={section3logo3} alt="logo" />
        <text>"Powur provides clean, reliable energy at significantly lower costs"</text>
      </div>
      </div>

  );
};

export default Section5;
