import React from "react";

import PopUp from "./components/PopUp";
import "./popups.css";

const DepositPopUp = (props) => {
  return (
    <div className={props.className}>
      <PopUp>DepositPopUp</PopUp>
    </div>
  );
};
export default DepositPopUp;