import React from "react";

import { ConfirmButton, InputField } from "../UI";
import PopUpHeader from "../PopUpHeader";
import PopUpOverlay from "../PopUpOverlay";
import ArrowDownIcon from "../../assets/icons/arrow-down.svg";
import SwapIcon from "../../assets/icons/Swap_icon.svg";
import USDCIcon from "../../assets/icons/dollar.svg";
import BUSDIcon from "../../assets/icons/BUSD.svg";
import classes from "./swap-components.module.css";

const SwapPopUp = () => {
  return (
    <PopUpOverlay>
      <PopUpHeader title="Swap" />
      <div className="spacing-vertical">
        <div className="flex-between">
          <div className={classes.text1}>Pay</div>
          <div className={classes.text2}>Available: 500</div>
        </div>
        <InputField icon={USDCIcon} name="USDC" />
      </div>
      <div className="flex-center">
        <img src={ArrowDownIcon} alt="Arrow" />
      </div>
      <div className="spacing-vertical">
        <div className="flex-between">
          <div className={classes.text1}>Receive (Estimated)</div>
          <div className={classes.text2}>Available: 1200</div>
        </div>
        <InputField icon={BUSDIcon} name="BUSD" />
      </div>
      <div className="flex-center">
        <div className={classes.text1}>1 USDC = 1.0005 USDC</div>
        <img src={SwapIcon} alt="Swap Icon" />
      </div>
      <ConfirmButton className="gray-background">Confirm Order</ConfirmButton>
      <div className="flex-center">
        <div className={classes.text1}>
          Enter amount to see more trading details
        </div>
      </div>
    </PopUpOverlay>
  );
};

export default SwapPopUp;
