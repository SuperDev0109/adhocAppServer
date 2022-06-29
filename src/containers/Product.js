import React, { Fragment } from "react";
import Header from "../components/layouts/header/header";
import Footer from "../components/layouts/footer/footer";
import {
  ProductBreadcrumbs,
  ProductBrand,
  ProductReview,
  ProductCategory,
} from "../components/sections/product";
import "./screen.scss";
const Product = () => {
  return (
    <Fragment>
      <div className="container-fluid screen">
        <Header />
        <div className="page-container">
          <ProductBreadcrumbs />

          <ProductBrand />

          <ProductReview />

          <ProductCategory />
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};
export default Product;
