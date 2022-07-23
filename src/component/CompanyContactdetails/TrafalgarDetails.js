import React from "react";
import "./TrafalgarDetails.css";

const CompanyDetails = (props) => {
  return (
    <div className="Company">
      <div className="Company-Heading">{props.heading}</div>
      <div className="CompanyItems">
        {props.menuItems.map((item1) => {
          return <span className="item1">{item1}</span>;
        })}
      </div>
    </div>
  );
};

const TrafalgarDetails = () => {
  return (
    <div className="TrafalgarCompanyDetails-Page">
      <div className="Text">
        <div className="text1">
          <div className="TextT">T</div>
          <div className="Textlogo">Trafalgar</div>
        </div>

        <div className="Trafalgar-Description">
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </div>
        <div className="Trafalgar-Copy">
          ©Trafalgar PTY LTD 2020. All rights reserved
        </div>
      </div>
      <div className="AboutDetails">
        <CompanyDetails
          heading={"Company"}
          menuItems={["About", "Find a doctor", "Testimonials", "Apps"]}
        />
        <CompanyDetails
          heading={"Region"}
          menuItems={["Indonesia", "Singapore", "Hongkong", "Canada"]}
        />
        <CompanyDetails
          heading={"Help"}
          menuItems={[
            "Helpcenter",
            "Contact support",
            "Instruction",
            "How it works",
          ]}
        />
      </div>
    </div>
  );
};

export default TrafalgarDetails;
