import React from "react";

import "./popup-components.css";

const PopUp = (props) => {
  return (
    <>
      <div className="layer" onClick={props.onClose}></div>
      <div className={`popup flex-column ${props.className}`}>{props.children}</div>
    </>
  );
};
export default PopUp;
