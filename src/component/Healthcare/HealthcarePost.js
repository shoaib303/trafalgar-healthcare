import React from "react";
import "./HealthcarePost.css";

const HealthcarePost = () => {
  return (
    <div className="Healthcarepost-home">
      <div className="HealthcarePost">
        <div className="Healthcare-Heading">Virtual healthcare for you</div>
        <div className="Healthcare-description">
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </div>
        <button className="consult">Consult today</button>
      </div>

      <img
        className="Healthcare-Image"
        src="/image/trafalgar-header.png"></img>
    </div>
  );
};

export default HealthcarePost;
