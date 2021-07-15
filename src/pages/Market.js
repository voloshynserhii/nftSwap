import React, { useState } from "react";

import SwapTableHeader from "../components/SwapComponents/SwapTableHeader";
import { MarketPopUp, SwitchGroup } from "../components/MarketComponents";
import classes from "./market.module.css";

const Market = () => {
  const [item, setItem] = useState('');

  const onSwitchHandler = (table) => {
    setItem(() => table);
  };

  return (
    <div className={`pages-overlay flex full-width ${classes.market}`}>
      <div className={classes.marketTableWrapper}>
        <SwitchGroup switchHandler={onSwitchHandler} />
        {item === "orders" && <SwapTableHeader />}
        {item === "graph" && <h2>BUSD Chart</h2>}
        {item === "book" && <SwapTableHeader />}
      </div>
      <MarketPopUp />
    </div>
  );
};

export default Market;
