import React, { useState } from "react";

import { ConfirmButton, PopUpButton } from "../UI";
import { StakePopUp, Success } from "../popups";
import PopUpHeader from "../PopUpHeader";
import PopUpOverlay from "../PopUpOverlay";
import BUSDIcon from "../../assets/icons/BUSD.svg";
import MarketInputField from "./MarketInputField";
import MarketSelectField from "./MarketSelectField";
import SmallSelectField from "./SmallSelectField";
import ICPIcon from "../../assets/wallets/dfinity.svg";
import Controller from "../../assets/controller.svg";
import classes from "./market-components.module.css";

const MarketPopUp = (props) => {
  const [buy, setBuy] = useState(false);
  const [sell, setSell] = useState(false);

  const showBuyHandler = () => {
    setBuy(true);
  };
  const closeBuyHandler = () => {
    setBuy(false);
  };

  const showSellHandler = () => {
    setSell(true);
  };
  const closeSellHandler = () => {
    setSell(false);
  };

  return (
    <>
      {buy && (
        <Success title="Order Created" onClose={closeBuyHandler}>
          Exchanging 300 BUSD for 320.16 USDC
        </Success>
      )}
      {sell && <StakePopUp onClose={closeSellHandler} />}
      <PopUpOverlay>
        <PopUpHeader className={classes.header} title="Buy & Sell" />
        <div className="flex-between full-width">
          <div className="text2" onClick={props.openPopout}>
            Available: 1000 BUSD
          </div>
          <SmallSelectField>Limit</SmallSelectField>
        </div>
        <MarketSelectField
          ammountFrom="49,58"
          iconFrom={BUSDIcon}
          nameFrom="BUSD"
          ammountTo="20,169"
          iconTo={ICPIcon}
          nameTo="ICP"
        />
        <img
          className={`spacing-vertical2 full-width ${classes.controller}`}
          src={Controller}
          alt="controller"
        />
        <div className="spacing-vertical">
          <div className="flex-between">
            <div className="text1">Receive (Estimated)</div>
            <div className="text2">Fees: $0.1 USD</div>
          </div>
          <MarketInputField icon={ICPIcon} name="ICP" price="20,15" />
        </div>
        <div>
          <div className="flex-between">
            <PopUpButton
              className="button-popup buy-button"
              onClick={showBuyHandler}
            >
              BUY icp
            </PopUpButton>
            <PopUpButton
              className="button-popup sell-button"
              onClick={showSellHandler}
            >
              Sell icp
            </PopUpButton>
          </div>
          <ConfirmButton className="linear-background full-width">
            BUY icp
          </ConfirmButton>
        </div>
      </PopUpOverlay>
    </>
  );
};

export default MarketPopUp;
