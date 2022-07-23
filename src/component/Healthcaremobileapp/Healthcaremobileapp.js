import React from "react";
import "./Healthcaremobileapp.css";

const Healthcaremobileapp = () => {
  return (
    <div className="Healthcaremobileapp-home">
      <div className="Healthcaremobileapp">
        <div className="Healthcaremobileapp-Heading">
          Download our mobile apps
        </div>
        <div className="Healthcaremobileapp-description">
          Our dedicated patient engagement app and web portal allow you to
          access information instantaneously (no tedeous form, long calls, or
          administrative hassle) and securely
        </div>
        <button className="download">
          Download <img src="/image/Vector.png" />
        </button>
      </div>

      <img
        className="Healthcaremobileapp-Image"
        src="/image/trafalgar-mobileapp.png"
      ></img>
    </div>
  );
};

export default Healthcaremobileapp;
