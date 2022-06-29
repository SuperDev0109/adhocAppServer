import React, { Fragment } from "react";
import {
  OrderTitle,
  OrderContent,
  OrderComplete,
  SpecialMention,
  OrderSummary,
} from "../components/sections/order";
import Footer from "../components/layouts/footer/footer";
import "./screen.scss";

export default function Order() {
  return (
    <div className="container-fluid screen">
      
      <OrderTitle title="My Order" backto="/product" />
      <div className="page-container">
        <OrderContent />

        <OrderComplete />

        <SpecialMention />

        <OrderSummary />
      </div>
      <Footer />
    </div>
  );
}
