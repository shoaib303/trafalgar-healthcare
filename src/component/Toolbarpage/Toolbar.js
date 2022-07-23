import React from "react";
import "./Toolbar.css";

const ToolbarItems = (props) => {
  return (
    <>
      {props.menuItems.map((item) => (
        <span className="items">{item}</span>
      ))}
    </>
  );
};

const Toolbar = () => {
  return (
    <div className="Toolbar">
      <div className="text">
        <div className="textT">T</div>
        <div className="textlogo">Trafalgar</div>
      </div>
      <div className="Tool-items">
        <ToolbarItems
          menuItems={[
            "Home",
            "Find a doctor",
            "Apps",
            "Testimonials",
            "About us",
          ]}
        />
      </div>
    </div>
  );
};

export default Toolbar;
