import React from "react";

import { PopUpButton } from "../../UI";
import classes from "./popouts.module.css";

const StakedCoins = () => {
  return (
    <div className={classes.overlay}>
      <div className={classes.header}>
        <div className="title align-center">Staked Coins</div>
        <div className={`flex-between ${classes.tableHeader}`}>
          <span>Amount</span>
          <span>Rewards</span>
          <span>Rate</span>
          <span>Time Left</span>
        </div>
      </div>
      <div className={classes.table}>
        table
      </div>
      <div className="full-width">
        <div className={`flex-center ${classes.bottomText}`}>
          Please select any one or more neurons to add, sell, claim and return
          coins
        </div>
        <PopUpButton className={`button-popup linear-background ${classes.manageButton}`}>
          Manage
        </PopUpButton>
      </div>
    </div>
  );
};

export default StakedCoins;
