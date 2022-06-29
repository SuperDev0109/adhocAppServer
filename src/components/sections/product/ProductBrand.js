import React, { Fragment } from "react";
import "./ProductBrand.scss";
import Avatar from "../../UI/avatar/avatar";
import SearchBox from "../../UI/searchbox/searchBox";
import Button from "../../UI/button/button";
import avatar_image from './img/chief.png';
import { useNavigate } from "react-router-dom";
export default function ProductBrand() {
  let navigate = useNavigate();
  return (

    <Fragment>
        <div className="productBrandSection">
          <div className="brand-background"></div>
          <div className="mainPanel desktopBrand">
            <div onClick={()=>navigate('/')}><Button style={{backgroundColor:'#FFC700',color:'black',paddingLeft:"10px"}}><i className="bi bi-chevron-left"></i> Back</Button></div>
            <Avatar url={avatar_image} alt="KFC Image">
              {/* <img
              src="/images/product/chief.png"
              className="mt-2"
              alt="KFC Image"
              width="121px"
              height="121px"
            /> */}
            </Avatar>
            <div>
                <span className="title1">KFC</span>
                <span className="title2">From 11:00 - 17:00</span>
            </div>
            <div className="col-md-6">
              <SearchBox
                type="text"
                name="searchres"
                placeholder="Search in the menu"
              ></SearchBox>
            </div>
          </div>
          <div className="mainPanel mobileBrand d-none">
          <Button style={{backgroundColor:'#FFC700',color:'black',paddingLeft:"5px"}}><i className="bi bi-chevron-left"></i> Back</Button>
          <div>
                <div className="title1">KFC</div>
                <div className="title2">From 11:00 - 17:00</div>
            </div>
          </div>
        </div>
    </Fragment>
  );
}
