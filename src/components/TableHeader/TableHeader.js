import React from "react";

import SwapIcon from "../../assets/icons/Swap_icon.svg";
import classes from "./table-header.module.css";

const TableHeader = (props) => {
  let swap =
    props.swap > 0 ? (
      <span style={{ color: "#0EC9B5" }}>{props.swap}</span>
    ) : (
      <span style={{ color: "#FF2A57" }}>{props.swap}</span>
    );

  return (
    <>
      <div className="flex center">
        <div>
          <img src={props.icon1} alt={props.icon1Name} />
          <img
            className={classes.iconOverlay}
            src={props.icon2}
            alt={props.icon2Name}
          />
        </div>
        <span>{props.icon1Name}</span>/
        <span className={classes.text1} style={{ color: "#8A9AB9" }}>
          {props.icon2Name}
        </span>
        {props.swap ? swap : <img src={SwapIcon} alt="swap" />}
      </div>
      {/* <div className={classes.title}>{props.title} {props.icon1Name}</div> */}
      <div className="flex-between spacing-vertical">
        <div className={classes.title}>
          {props.title} {props.icon1Name}
        </div>
        {/* <div className="flex center">
          <span className={classes.dynamicPositive}>{props.dynamic} {props.icon1Name}</span>
          <span className={classes.text1}>Past 24 Hours</span>
        </div> */}
        {props.children}
      </div>
    </>
  );
};

export default TableHeader;
