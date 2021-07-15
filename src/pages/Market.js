import React, { useState } from "react";

import SwapTableHeader from "../components/SwapComponents/SwapTableHeader";
import { MarketPopUp, SwitchGroup } from "../components/MarketComponents";
import classes from "./market.module.css";

const Market = () => {
  const [item, setItem] = useState();

  const onSwitchHandler = (table) => {
    setItem(() => table);
  };

  return (
    <div className={`pages-overlay flex full-width ${classes.market}`}>
      <div className={classes.marketTableWrapper}>
        <SwitchGroup switchHandler={onSwitchHandler} />
        <SwapTableHeader />
        {item === "orders" && <h2>orders</h2>}
        {item === "book" && <h2>book</h2>}
        {item === "graph" && <h2>graph</h2>}
      </div>
      <MarketPopUp />
    </div>
  );
};

export default Market;
