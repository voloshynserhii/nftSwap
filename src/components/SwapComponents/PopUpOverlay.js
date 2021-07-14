import React from "react";

import classes from "./swap-components.module.css";

const PopUpOverlay = (props) => {
  return (
    <div className={`${classes.overlay} ${classes.popup}`}>
      {props.children}
    </div>
  );
};

export default PopUpOverlay;