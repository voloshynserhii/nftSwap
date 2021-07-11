import React from "react";

import { InputField, SettingsButton, WalletButton } from "../UI";
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
      <InputField>dkjhvjkhgjkr</InputField>
    </div>
  );
};

export default SwapPopUp;
