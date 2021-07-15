import React from "react";

import classes from "./switch-block.module.css";

const SwitchBlock = (props) => {
  return (
    <div className="flex-center" onClick={props.onClick}>
      <div className={`flex center ${classes.switchBlock}`}>
        {props.children}
      </div>
    </div>
  );
};

export default SwitchBlock;
