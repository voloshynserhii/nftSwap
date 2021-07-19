import React from "react";

import SwapIcon from "../../assets/icons/Swap_icon.svg";
import classes from "./table-header.module.css";

const TableHeader = (props) => {

  return (
    <>
      <div className="flex center">
        <div>
          <img src={props.icon1} alt={props.icon1Name} />
          <img className={classes.iconOverlay} src={props.icon2} alt={props.icon2Name} />
        </div>
        <span>{props.icon1Name}</span>/<span className={classes.text1}>{props.icon2Name}</span>
        {props.swap ? <span>{props.swap}</span> : <img src={SwapIcon} alt="swap" />}
      </div>
      <div className={classes.title}>{props.title} {props.icon1Name}</div>
      <div className="flex-between spacing-vertical2">
        <div className="flex center">
          <span className={classes.dynamicPositive}>{props.dynamic} {props.icon1Name}</span>
          <span className={classes.text1}>Past 24 Hours</span>
        </div>
        {props.children}
      </div>
    </>
  );
};

export default TableHeader;