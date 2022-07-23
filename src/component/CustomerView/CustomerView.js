import React from "react";
import "./CustomerView.css";

const CustomerView = () => {
  return (
    <div className="CustomerView-Page">
      <div className="CustomerView-Home">
        <div className="Customerheading">
          <div className="CustomerView-Heading">
            What our customer are saying
          </div>
        </div>

        <div className="Person-Data">
          <img src="/image/image 1.png" className="person-image"></img>
          <div className="person-detail">
            <div className="Person-name">Edward Newgate</div>
            <div className="Person-profile">Founder Circle</div>
          </div>
          <div className="CustomerPoint-view">
            “Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely”
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerView;
