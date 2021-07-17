import React from "react";

import { InputField } from "../UI";

const MarketInputField = (props) => {
  return (
    <InputField>
      <div className="flex center">
        <img src={props.icon} alt={props.name} />
        <span className="input-text">{props.name}</span>
      </div>
      <span className="input-text">{props.price}</span>
    </InputField>
  );
};

export default MarketInputField;
