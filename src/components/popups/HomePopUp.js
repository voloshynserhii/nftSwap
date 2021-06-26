import React from "react";

import PopUp from "./components/PopUp";
import "./popups.css";

const HomePopUp = (props) => {
  return (
    <div className={props.className}>
      <PopUp>HomePopUp</PopUp>
    </div>
  );
};
export default HomePopUp;