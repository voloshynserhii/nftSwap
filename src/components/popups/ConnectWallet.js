import React from "react";

import PopUp from "./components/PopUp";
import "./popups.css";
const ConnectWallet = (props) => {
  return (
    <div className={props.className}>
      <PopUp>connect wallet</PopUp>
    </div>
  );
};
export default ConnectWallet;