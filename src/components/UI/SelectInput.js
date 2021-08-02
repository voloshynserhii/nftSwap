import React from "react";

import {InputField} from "./";


const SelectInput = (props) => {
  return (
    <InputField>
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
    </InputField>
  );
};

export default SelectInput;