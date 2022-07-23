import React from "react";
import Toolbar from "./component/Toolbarpage/Toolbar";
import HealthcarePost from "./component/Healthcare/HealthcarePost";
import OurService from "./component/Service/OurService";
import HealthcareProvider from "./component/HealthcareProvider/HealthcareProvider";
import Healthcaremobileapp from "./component/Healthcaremobileapp/Healthcaremobileapp";
import CustomerView from "./component/CustomerView/CustomerView";
import Checkout from "./component/Checkout/Checkout";
import TrafalgarDetails from "./component/CompanyContactdetails/TrafalgarDetails";
const App = () => {
  return (
    <>
      <Toolbar />
      <HealthcarePost />
      <OurService />
      <HealthcareProvider />
      <Healthcaremobileapp />
      <CustomerView />
      <Checkout />
      <TrafalgarDetails />
    </>
  );
};

export default App;
