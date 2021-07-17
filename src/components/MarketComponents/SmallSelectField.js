import React from "react";

import { InputField } from "../UI";

const SmallSelectField = (props) => {
  return (
    <InputField>
    {props.children}
            <select className="select">
              <option value={props.option} />
            </select>
    </InputField>
  );
};

export default SmallSelectField;