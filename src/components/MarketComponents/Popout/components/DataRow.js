import React from "react";

import classes from "./table.module.css";

const DataRow = (props) => {
  return (
    <div className={`flex-between align-center ${classes.row}`}>
      <div className="flex center">
        <input type="checkbox" name={props.id} />
        <span>{props.amount}</span>
      </div>
      <span>{props.rewards}</span>
      <span>{props.rate}</span>
      <span>{props.timeLeft} years</span>
    </div>
  );
};

export default DataRow;
