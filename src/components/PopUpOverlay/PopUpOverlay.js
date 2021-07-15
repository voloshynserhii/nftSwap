import React from "react";

import classes from "./popup-overlay.module.css";

const PopUpOverlay = (props) => {
  return (
    <div className={`${classes.overlay} ${classes.popup}`}>
      {props.children}
    </div>
  );
};

export default PopUpOverlay;