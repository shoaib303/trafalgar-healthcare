import React from "react";
import "./OurService.css";

const OurServiceItem = (props) => {
  return (
    <div className="OurService">
      <img src={props.image} className="OurServiceItem-image"/>
      <div className="OurServiceItem-Heading">
        {props.OurServiceItemHeading}
      </div>
      <div className="OurServiceItem-Description">
        {props.OurServiceItemDescription}
      </div>
    </div>
  );
};

const OurService = () => {
  return (
    <div className="OurService-Page">
      <div className="OurService-Heading">Our services</div>
      <div className="OurService-Description">
        We provide to you the best choiches for you. Adjust it to your health
        needs and make sure your undergo treatment with our highly qualified
        doctors you can consult with us which type of service is suitable for
        your health
      </div>
      <div className="OurService-list">
        <OurServiceItem
          image={"./image/Frame1.png"}
          OurServiceItemHeading={"Search doctor"}
          OurServiceItemDescription={
            "Choose your doctor from thousands of specialist, general, andtrusted hospitals"
          }
        />
        <OurServiceItem
          image={"./image/Frame 2.png"}
          OurServiceItemHeading={"Online pharmacy"}
          OurServiceItemDescription={
            "Buy  your medicines with our mobile application with a simple delivery system"
          }
        />
        <OurServiceItem
          image={"./image/Frame 3.png"}
          OurServiceItemHeading={"Consultation"}
          OurServiceItemDescription={
            "Free consultation with our trusted doctors and get the best recomendations"
          }
        />
        <OurServiceItem
          image={"./image/Frame 4.png"}
          OurServiceItemHeading={"Details info"}
          OurServiceItemDescription={
            "Free consultation with our trusted doctors and get the best recomendations"
          }
        />
        <OurServiceItem
          image={"./image/Frame 5.png"}
          OurServiceItemHeading={"Emergency care"}
          OurServiceItemDescription={
            "You can get 24/7 urgent care for yourself or your children and your lovely family"
          }
        />
        <OurServiceItem
          image={"./image/Frame 6.png"}
          OurServiceItemHeading={"Tracking"}
          OurServiceItemDescription={
            "Track and save your medical history and health data "
          }
        />
      </div>
      <div className="learn-more1">
      <button className="learn-more">Learn more</button>
      </div>
      
    </div>
  );
};

export default OurService;
