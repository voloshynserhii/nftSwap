import React from "react";

import "./popup-components.css";

const PopUpInput = (props) => {
  return (
    <>
      <input
        className={`popup-input ${props.className}`}
        type={props.type}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </>
  );
};
export default PopUpInput;
