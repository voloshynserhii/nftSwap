import React, { useState } from "react";

import {ArchivePage, ChartPage, OrdersPage , OrderBookPage} from "../components/MarketComponents/Pages";
import { MarketPopUp, SwitchGroup } from "../components/MarketComponents";
import classes from "./market.module.css";

import MarketPopout from "../components/MarketComponents/Popout";

const Market = () => {
  const [item, setItem] = useState('');
  const [popoutOpen, setPopoutOpen] = useState(false);

  const onSwitchHandler = (table) => {
    setItem(() => table);
  };

  const openPopoutHandler = () => {
    setPopoutOpen(true);
  };
  
  if(popoutOpen) return <MarketPopout />
  
  return (
    <>
    <div className={`pages-overlay flex full-width ${classes.market}`}>
      <div className={classes.marketTableWrapper}>
        <SwitchGroup switchHandler={onSwitchHandler} />
        {item === "orders" && <OrdersPage />}
        {item === "graph" && <ChartPage title="BUSD Chart"/>}
        {item === "book" && <OrderBookPage />}
        {item === "archive" && <ArchivePage />}
      </div>
      <MarketPopUp openPopout={openPopoutHandler}/>
    </div>
    </>
  );
};

export default Market;
