import React from "react";
import "./Admission.css";
import science from "../assets/babyscie.jpg";
import parent from "../assets/parent_child.png";
const Admission = () => {
  return (
    <div>
      <div className="admis"></div>
      <div className="container-admis">
        <div className="parent"></div>
        <div className="admis-para">
          <h1 >Why Families Feel at Home with Mahatma</h1>
          <p >
            For over four decades, Mahatma Schools has stood as a trusted space
            where learning feels steady, respectful, and balanced. Our
            philosophy has always been simple: build character, strengthen
            academics, and help every child grow with confidence.
          </p>
          <button>Explore Mahatma</button>
        </div>
      </div>
    </div>
  );
};

export default Admission;
