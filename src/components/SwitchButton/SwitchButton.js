import React from "react";

import classes from "./switch-button.module.css";

const SwitchButton = (props) => {
  return (
    <div className={`flex-center ${classes.switchButton}`}>
      {props.children}
    </div>
  );
};

export default SwitchButton;
