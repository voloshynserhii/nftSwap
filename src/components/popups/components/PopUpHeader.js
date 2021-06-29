import React, { useState } from "react";

import AccountIcon from '../../../assets/popups/account-connected.svg';
import HamburgerIcon from "../../../assets/popups/hamburger.svg";
import NetworkIcon from "../../../assets/popups/network.svg";
import CloseIcon from "../../../assets/popups/hamburger-close.svg";
import "./popup-components.css";

const PopUpHeader = (props) => {
  return (
    <div className="popup-menu flex-between">
      <div lassName="flex-between">
        <img src={AccountIcon} alt="network" />
      </div>
      <div lassName="flex-between">
        <img src={NetworkIcon} alt="network" />
        <img src={HamburgerIcon} alt="network" />
      </div>
    </div>
  );
};
export default PopUpHeader;
