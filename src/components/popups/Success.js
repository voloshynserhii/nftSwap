// import React, { useState, useEffect } from "react";

import PopUp from "./components/PopUp";
import { PopUpButton } from "../UI";
import CloseIcon from "../../assets/icons/close.svg";
import SuccessBg from "../../assets/success-bg.svg";
import Success from "../../assets/success.svg";
import "./popups.css";

const SuccessPopUp = (props) => {
  return (
    <div className={props.className}>
      <PopUp className="success-popup" onClose={props.onClose}>
        <img
          className="full-width full-height success-bg"
          src={SuccessBg}
          alt="success"
        />
        <img
          className="full-width full-height success"
          src={Success}
          alt="success"
        />
        <span className="close-btn" onClick={props.onClose}>
          <img src={CloseIcon} alt="close" />
        </span>
        <div className="full-width align-center">
          <h2>Successfully Bought ICP</h2>
          <div className="text-gray spacing-vertical2">90,000,000 ICPX sent to your address.</div>
          <PopUpButton className="button-popup linear-background">
            View Transaction
          </PopUpButton>
        </div>
      </PopUp>
    </div>
  );
};
export default SuccessPopUp;
