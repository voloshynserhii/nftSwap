import React from "react";

import { InputField } from "../UI";
import classes from "./market-components.module.css";

const SmallSelectField = (props) => {
  return (
    <InputField className={classes.selectSmall}>
      {props.children}
      <select className="select">
        <option value={props.option} />
      </select>
    </InputField>
  );
};

export default SmallSelectField;
