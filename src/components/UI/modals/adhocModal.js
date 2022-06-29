import React from "react";
import "./modals.scss";

const MenuModal = (props) => {

  const hideModal = (event) => {
    event.stopPropagation();
    props.hide();
  }

  return props.visible ? <div className="modal">
      <div className="modal-behide" onClick={hideModal}></div>
      
      {props.children}
  </div> : '';
}

export default MenuModal;
