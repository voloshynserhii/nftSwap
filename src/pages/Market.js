import React, { useState } from "react";

import {ChartPage, OrdersPage , OrderBookPage} from "../components/MarketComponents/Pages";
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
        {item === "orders" && <OrdersPage />}
        {item === "graph" && <ChartPage title="BUSD Chart"/>}
        {item === "book" && <OrderBookPage />}
      </div>
      <MarketPopUp />
    </div>
  );
};

export default Market;
