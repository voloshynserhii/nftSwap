// import React, {useState} from 'react';

import { SwapPopUp, SwapTableHeader } from "../components/SwapComponents";
import classes from "./swap.module.css";

const Swap = () => {
  return (
    <div className={`pages-overlay flex full-width ${classes.swap}`}>
      <div className={classes.swapTableWrapper}>
        <SwapTableHeader />
      </div>
      <SwapPopUp />
    </div>
  );
};

export default Swap;
