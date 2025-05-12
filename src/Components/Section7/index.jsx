import React from "react";
import section5image from "../../assets/section5image.png";
import "./index.css"
import ContainedButton from "../ContainedButton";
const Section7 = () => {
  return (
    <div className="Section7">
      <img src={section5image} alt="Section" />
      <div className="section7-card">
        <div className="Section7overlay-box">
          <h3>Together, we're giving back</h3>
          <div className="underline"></div>
          <p>A messsage from Powu'r CEO </p>
          <ContainedButton  text={"WATCH NOW"}/>
        </div>
      </div>
    </div>
  );
};

export default Section7;
