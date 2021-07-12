import React, { useState } from "react";

import SwapIcon from "../../assets/icons/Swap_icon.svg";
import USDCIcon from "../../assets/icons/dollar.svg";
import BUSDIcon from "../../assets/icons/BUSD.svg";
import classes from "./swap-components.module.css";

const SwapTableHeader = () => {
  const [term, setTerm] = useState("24h");

  const classTermPassive = `${classes.term} ${classes.termPassive}`;
  const classTermActive = `${classes.term} ${classes.termActive}`;
  
  return (
    <div className={`${classes.overlay} ${classes.table}`}>
      <div className="flex center">
        <div>
          <img src={USDCIcon} alt="usdc" />
          <img className={classes.iconOverlay} src={BUSDIcon} alt="busd" />
        </div>
        <span>USDC</span>/<span className={classes.text1}>BUSD</span>
        <img src={SwapIcon} alt="swap" />
      </div>
      <div className={classes.title}>1.005 USDC</div>
      <div className="flex-between spacing-vertical2">
        <div className="flex center">
          <span className={classes.dynamicPositive}>+227.54 USDC</span>
          <span className={classes.text1}>Past 24 Hours</span>
        </div>
        <div className="flex center">
          <span
            className={term === "24h" ? classTermActive : classTermPassive}
            onClick={() => setTerm("24h")}
          >
            24H
          </span>
          <span
            className={term === "1w" ? classTermActive : classTermPassive}
            onClick={() => setTerm("1w")}
          >
            1W
          </span>
          <span
            className={term === "1m" ? classTermActive : classTermPassive}
            onClick={() => setTerm("1m")}
          >
            1M
          </span>
        </div>
      </div>
    </div>
  );
};

export default SwapTableHeader;
