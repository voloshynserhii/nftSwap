import React from "react";

import "./popup-components.css";

const PopUpLink = (props) => {
  return (
    <div className={`popup-link ${props.className}`} onClick={props.onClick}>
        {props.children}
    </div>
  );
};
export default PopUpLink;