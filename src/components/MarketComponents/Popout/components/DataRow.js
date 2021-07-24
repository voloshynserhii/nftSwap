import React from "react";

import classes from "./table.module.css";

const DataRow = (props) => {
  return (
    <div className={`flex-between ${props.className}`}>
      <span>{props.amount}</span>
      <span>{props.rewards}</span>
      <span>{props.rate}</span>
      <span>{props.timeLeft}</span>
    </div>
  );
};

export default DataRow;
