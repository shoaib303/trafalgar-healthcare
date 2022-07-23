import React from "react";
import "./Checkout.css";

const CheckoutItem = (props) => {
  return (
    <div className="Checkout">
      <img src={props.image} className="CheckoutItem-image" />
      <div className="Checkout-detail">
        <div className="Checkout-Heading1">{props.CheckoutHeading}</div>
        <div className="Checkout-Description">{props.CheckoutDescription}</div>
        <div className="readmore">
          Read more
          <img src="/image/Vector 1.png" />
        </div>
      </div>
    </div>
  );
};

const Checkout = () => {
  return (
    <div className="Checkout-Page">
      <div className="Checkout-Heading">Check out our latest article</div>
      <div className="Checkout-list">
        <CheckoutItem
          image={"/image/image 2.png"}
          CheckoutHeading={"Disease detection, check  up in the laboratory"}
          CheckoutDescription={
            "In this case, the role of the health laboratory is very important to do  a disease detection..."
          }
        />
        <CheckoutItem
          image={"/image/image 3.png"}
          CheckoutHeading={"Herbal medicines that are  safe for consumption"}
          CheckoutDescription={
            "Herbal medicine is very widely used at this time because of its very good for your health..."
          }
        />
        <CheckoutItem
          image={"/image/image 4.png"}
          CheckoutHeading={"Natural care for healthy  facial skin"}
          CheckoutDescription={
            "A healthy lifestyle should start from now and also for your skin health.  There are some..."
          }
        />
      </div>
      <div className="view">
        <button className="viewButton">View all</button>
      </div>
    </div>
  );
};

export default Checkout;
