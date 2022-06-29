import React, { useState } from "react";
import "./dropbox.scss";
import LocationIcon from "../icons/locationIcon";
import FilterIcon from "../icons/filterIcon";
import SortIcon from "../icons/sortIcon";
import HeartIcon from "../icons/heartIcon";
import ShoppingCartIcon from "../icons/shoppingCartIcon";
import Button from "../button/button";
import { useNavigate } from "react-router-dom";
const AddressDropBox = (props) => {
  return (
    <div className="dropbox-container dropdown mg-0">
      <div
        class="dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <LocationIcon></LocationIcon>Add your address
      </div>
      <div className="dropdown-menu mt-1" aria-labelledby="dropdownMenuButton1">
        <div className="d-flex"><img src="images/icons/plus.png" className="" alt="prev icon image"/>
        <a class="dropdown-item p-0" href="#">
         Add a new address
        </a></div>
      </div>
    </div>
  );
};
export default AddressDropBox;
export const ShoppingCartDropBox = (props) => {
  let navigate=useNavigate();
  return (
    <div className="dropbox-container icon-dropbox dropdown mg-0">
      <div
        type="button"
        id="dropdownshopping"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <ShoppingCartIcon></ShoppingCartIcon>
      </div>
      <div class="dropdown-menu mt-1" aria-labelledby="dropdownshopping">
        <div class="dropdown-item p-0" href="#">
        You have no items in your shopping cart
        </div>
        <div class="dropdown-item mt-2 d-flex justify-content-center"  onClick={()=>navigate('/shoppingcart')}href="#">
          <Button style={{height:'40px'}}>Go to cart</Button>
        </div>
      </div>
    </div>
  );
};
export const HeartDropBox = (props) => {
  return (
    <div className="dropbox-container icon-dropbox dropdown mg-0">
      <div
        type="button"
        id="dropdownshopping"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <HeartIcon></HeartIcon>
      </div>
      <div class="dropdown-menu mt-1" aria-labelledby="dropdownshopping">
        <div class="dropdown-item p-0" href="#">
        Add your favourite food, restaurants or another
        </div>
        
      </div>
    </div>
  );
};

export const UserDropBox = (props) => {
  return (
    <div className="dropbox-container icon-dropbox dropdown mg-0" >
      <div
        type="button"
        id="dropdownshopping"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <HeartIcon></HeartIcon>
      </div>
      <div class="dropdown-menu mt-1" style={{minWidth:'26rem'}} aria-labelledby="dropdownshopping">
        <div class="dropdown-item p-0" href="#">
        Log in to your Adhoc account and have full access to the entire shopping list
        </div>
        <div class="dropdown-item mt-2 d-flex justify-content-center" href="#">
          <Button style={{height:'40px',marginRight:'1rem'}}>Log in</Button>
          <Button style={{height:'40px'}}>New account</Button>
        </div>
      </div>
    </div>
  );
};

export const FilterDropBox = (props) => {
  return (
    <div className="dropbox-container dropdown mg-0">
      <div
        class="dropdown-toggle"
        type="button"
        id="dropdownfilter"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <FilterIcon></FilterIcon>Filter
      </div>
      <div class="dropdown-menu mt-2" aria-labelledby="dropdownfilter">
        <a class="dropdown-item" href="#">
          filter1
        </a>
        <a class="dropdown-item" href="#">
          filter2
        </a>
        <a class="dropdown-item" href="#">
          filter3
        </a>
      </div>
    </div>
  );
};
export const SortDropBox = (props) => {
  return (
    <div className="dropbox-container dropdown mg-0">
      <div
        class="dropdown-toggle"
        type="button"
        id="dropdownsort"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <SortIcon></SortIcon>Sort
      </div>
      <div class="dropdown-menu mt-2" aria-labelledby="dropdownsort">
        <a class="dropdown-item" href="#">
          sort1
        </a>
        <a class="dropdown-item" href="#">
          sort2
        </a>
        <a class="dropdown-item" href="#">
          sort3
        </a>
      </div>
    </div>
  );
};
