import React from "react";

import "./ui.css";

const InputField = (props) => {
  return (
    <div className={`flex-between square input-field ${props.className}`}>
      {props.children}
    </div>
  );
};

export default InputField;
