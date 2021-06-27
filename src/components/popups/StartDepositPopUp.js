import React from "react";

import {PopUpLayer}from "./components";
import { MetaMaskLogo, PopUpButton } from "../UI";
import "./popups.css";

const StartDepositPopUp = (props) => {
  return (
    <div className={props.className}>
      <PopUpLayer>
        <div className="flex-column full-width full-height start-layer">
          <MetaMaskLogo />
          <h4>MetaMask prototypes</h4>
          <PopUpButton className="outlined">Deposit & Send</PopUpButton>
        </div>
      </PopUpLayer>
    </div>
  );
};
export default StartDepositPopUp;
