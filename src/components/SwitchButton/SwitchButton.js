import React from "react";

import classes from "./switch-button.module.css";

const SwitchButton = (props) => {
  return (
    <div className={`flex-center ${classes.switchButton}`}>
      <div className={classes.linearText}>
        {props.children}
      </div>
    </div>
  );
};

export default SwitchButton;
