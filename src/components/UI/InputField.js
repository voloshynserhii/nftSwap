import React from "react";

import "./ui.css";

const InputField = (props) => {
  return (
    <div className="flex-between square input-field">
      <div className="flex center">
        <img src={props.icon} alt={props.name} />
        <span className="input-text">{props.name}</span>
        <select className="select">
            <option value={props.option} />
        </select>
      </div>
      <div className="flex center">
        <span className="input-text">0</span>
      </div>
    </div>
  );
};

export default InputField;
