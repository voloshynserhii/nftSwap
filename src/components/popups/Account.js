import React from "react";

import PopUp from "./components/PopUp";
import "./popups.css";

const Account = (props) => {
  return (
    <div className={props.className}>
      <PopUp>account</PopUp>
    </div>
  );
};
export default Account;