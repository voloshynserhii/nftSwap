// import React, {useState} from 'react';

import SwapTableHeader from '../components/SwapComponents/SwapTableHeader'
import MarketPopUp from "../components/MarketComponents/MarketPopUp";
import classes from "./market.module.css";

const Market = () => {
  return (
    <div className={`pages-overlay flex full-width ${classes.market}`}>
      <div className={classes.marketTableWrapper}>
        <SwapTableHeader />
      </div>
      <MarketPopUp />
    </div>
  );
};

export default Market;
