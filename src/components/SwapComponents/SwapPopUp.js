import React from "react";

import { ConfirmButton, InputField, SettingsButton, WalletButton } from "../UI";
import ArrowDownIcon from "../../assets/icons/arrow-down.svg";
import SwapIcon from "../../assets/icons/Swap_icon.svg";
import classes from "./swap-components.module.css";

const SwapPopUp = () => {
  return (
    <div className={`${classes.overlay} ${classes.popup}`}>
      <div className="flex-between">
        <h1>Swap</h1>
        <div className="flex">
          <WalletButton />
          <SettingsButton />
        </div>
      </div>
      <div className="flex-between">
        <span>Pay</span>
        <span>Available: 500</span>
      </div>
      <InputField>USDC</InputField>
      <div className="flex-center">
        <img src={ArrowDownIcon} alt="Arrow" />
      </div>
      <div className="flex-between">
        <span>Receive (Estimated)</span>
        <span>Available: 1200</span>
      </div>
      <InputField>BUSD</InputField>
      <div className="flex-center">
        <span>1 USDC = 1.0005 USDC</span>
        <img src={SwapIcon} alt="Swap Icon" />
      </div>
      <ConfirmButton>Confirm Order</ConfirmButton>
      <div className="flex-center">
        <span>Enter amount to see more trading details</span>
      </div>
    </div>
  );
};

export default SwapPopUp;
