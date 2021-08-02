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
  const [success, setSuccess] = useState(false);

  const showBuyHandler = () => {
    setBuy(true);
  };
  const closeHandler = () => {
    setBuy(false);
    setSell(false);
    setSuccess(false);
  };

  const showSellHandler = () => {
    setSell(true);
  };
  
  const successHandler = () => {
    setSell(false);
    setSuccess(true);
  }

  return (
    <>
      {buy && (
        <Success title="Order Created" onClose={closeHandler}>
          Exchanging 300 BUSD for 320.16 USDC
        </Success>
      )}
      {sell && <StakePopUp onClose={closeHandler} onConfirm={successHandler}/>}
      {success && (
        <Success title="Neuron Successfull Topped Up" onClose={closeHandler}>
          90,000,000 ICPX sent to your address.
        </Success>
      )}
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
