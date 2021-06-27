import React from "react";

import "./popup-components.css";

const PopUpConfirmButton = (props) => {
  return (
    <>
      <button
        onClick={props.onClick}
        className={`popup-confirm ${props.className}`}
      >
        {props.children}
      </button>
    </>
  );
};
export default PopUpConfirmButton;
