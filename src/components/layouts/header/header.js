import SearchBox from "../../UI/searchbox/searchBox";
import AddressDropBox from "../../UI/dropbox/dropbox";
import HeartIcon from "../../UI/icons/heartIcon";
import UserIcon from "../../UI/icons/userIcon";
import ToggleButton from "../../UI/icons/toggleButtonIcon";
import Modal from "../../UI/modals/adhocModal";
import { ShoppingCartDropBox, HeartDropBox, UserDropBox } from "../../UI/dropbox/dropbox";
import Button from "../../UI/button/button";
import "./header.scss";
import { useState } from "react";
const Header = () => {
  const showModal = (e) => {
    setModal(true);
  };

  const [visibility, setModal] = useState(false);
  return (
    <div className="head">
      <div className="header navbar navbar-expand-lg navbar-light bg-light d-flex">
        <a className="navbar-brand" href="/">
          <img src="images/logo.svg" alt="logo" className="logo" />
        </a>
        <div className="demenu d-flex">
          <div>
            <SearchBox
              type="text"
              name="searchres"
              placeholder="Search for restaurant"
            ></SearchBox>
          </div>
          <div className="m-0">
            <AddressDropBox
            ></AddressDropBox>
          </div>
        </div>
        <div className="icon-container d-flex">
          <div className="menu-icon-cover">
            <div>
              <HeartDropBox></HeartDropBox>
            </div>
          </div>
          <div className="menu-icon-cover">
            <ShoppingCartDropBox></ShoppingCartDropBox>
          </div>
          <div className="menu-icon-cover">
            <UserDropBox></UserDropBox>
          </div>
          <div className="menu-icon-cover">
            <div onClick={showModal}>
              <ToggleButton></ToggleButton>
            </div>
          </div>
        </div>
      </div>
      <div className="respons">
        <SearchBox
          type="text"
          name="searchres"
          placeholder="Search for restaurant"
        ></SearchBox>
      </div>
      <div className="respons">
        <AddressDropBox
        ></AddressDropBox>
      </div>
      <Modal visible={visibility} hide={() => setModal(false)} showHideIcon>
        <div className="modal-content p-4">
          <div className="close-cont" onClick={() => setModal(false)}>
            <span className="close">&times;</span>
          </div>
          <div className="d-flex mb-3 justify-content-between align-items-center">
            <div className="icon-cover d-flex justify-content-center align-items-center">
              <UserIcon></UserIcon>
            </div>
            <Button value="Log in"> Log In</Button>
            <Button value="New account"> New account</Button>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div className="icon-cover d-flex justify-content-center align-items-center">
              <HeartIcon></HeartIcon>
            </div>
            <div id="fav" style={{ width: "83%" }}>
              <div id="fav" style={{ width: "59%" }}><Button value="View favorites">View favorites</Button></div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default Header;
