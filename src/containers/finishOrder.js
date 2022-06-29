import React, { Fragment } from "react";
import OrderTitle from "../components/sections/order/OrderTitle";
import {
  FinishPayment,
  FinishTips,
  FinishDiscount,
  FinishInvoice,
  FinishSummary,
} from "../components/sections/finishOrder";
import "./screen.scss";
import Footer from "../components/layouts/footer/footer";

export default function FinishOrder() {
  return (
    <div className="container-fluid screen">
      
      <OrderTitle title="Finish Order" backto="/food-ordering"/>
      <div className="page-container">
        <div style={{ margin: "0 5%", width: "90%" }}>
          <FinishPayment />

          <FinishTips />

          <FinishDiscount />

          <FinishInvoice />
        </div>
        <FinishSummary />
      </div>
      <Footer />
    </div>
  );
}
