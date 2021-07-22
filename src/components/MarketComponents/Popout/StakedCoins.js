import React from "react";

import { PopUpButton, InputField } from "../../UI";
import Controller from "../../../assets/controller.svg";
import classes from "./popouts.module.css";

const StakedCoins = () => {
  return (
    <div className={`full-width ${classes.overlay}`}>
      <div className={`flex-column ${classes.header}`}>
        <div className="title">Staked Coins</div>
        <div className="flex-between full-width">
          <span>Amount</span>
          <span>Rewards</span>
          <span>Rate</span>
          <span>Time Left</span>
        </div>
      </div>
      <div className="full-width">
        <div className="input-text">
          Please select any one or more neurons to add, sell, claim and return
          coins
        </div>
        <PopUpButton className={`button-popup switch-active text-white`}>
          Manage
        </PopUpButton>
      </div>
    </div>
  );
};

export default StakedCoins;
