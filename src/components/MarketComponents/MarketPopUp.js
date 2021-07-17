import React from "react";

import { ConfirmButton, PopUpButton } from "../UI";
import PopUpHeader from "../PopUpHeader";
import PopUpOverlay from "../PopUpOverlay";
import BUSDIcon from "../../assets/icons/BUSD.svg";
import MarketInputField from "./MarketInputField";
import MarketSelectField from "./MarketSelectField";
import ICPIcon from "../../assets/wallets/dfinity.svg";
import classes from "./market-components.module.css";

const MarketPopUp = () => {
  return (
    <PopUpOverlay>
      <PopUpHeader title="Buy & Sell" />
      <div className="flex-between full-width">
        <div className="text2">Available: 1000 BUSD</div>
        <div>Limit</div>
      </div>
      <MarketSelectField
        ammountFrom="49,58"
        iconFrom={BUSDIcon}
        nameFrom="BUSD"
        ammountTo="20,169"
        iconTo={ICPIcon}
        nameTo="ICP"
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
          <PopUpButton className="button-popup buy-button">BUY icp</PopUpButton>
          <PopUpButton className="button-popup sell-button">
            Sell icp
          </PopUpButton>
        </div>
        <ConfirmButton className="linear-background full-width">
          BUY icp
        </ConfirmButton>
      </div>
    </PopUpOverlay>
  );
};

export default MarketPopUp;
