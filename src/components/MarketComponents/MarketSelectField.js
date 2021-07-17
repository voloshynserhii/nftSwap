import React from "react";

import { InputField } from "../UI";
import classes from "./market-components.module.css";

const MarketSelectField = (props) => {
  return (
    <InputField>
      <div className="flex-column full-width">
        <div className="flex-between full-width">
          <div className="input-text">{props.ammountFrom} {props.nameFrom}</div>
          <div className="flex center">
            <img src={props.iconFrom} alt={props.nameFrom} />
            <span className="input-text">{props.nameFrom}</span>
            <select className="select">
              <option value={props.option} />
            </select>
          </div>
        </div>
        <div className={classes.line}></div>
        <div className="flex-between full-width">
          <div className="input-text">{props.ammountTo} {props.nameTo}</div>
          <div className="flex center">
            <img src={props.iconTo} alt={props.nameTo} />
            <span className="input-text">{props.nameTo}</span>
            <select className="select">
              <option value={props.option} />
            </select>
          </div>
        </div>
      </div>
    </InputField>
  );
};

export default MarketSelectField;
