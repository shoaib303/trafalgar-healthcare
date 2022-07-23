import React from "react";
import "./HealthcareProvider.css";

const HealthcareProvider = () => {
  return (
    <div className="HealthcareProvider-Home">
      <img
        className="HealthcareProvider-Image"
        src="/image/trafalgar.png"
      ></img>
      <div className="HealthcareProvider">
        <div className="HealthcareProvider-Heading">
          Leading healthcare providers
        </div>
        <div className="HealthcareProvider-description">
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone. To us, it’s not just work. We take
          pride in the solutions we deliver.
        </div>
        <button className="learn">Learn more</button>
      </div>
    </div>
  );
};

export default HealthcareProvider;
