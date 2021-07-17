import React from "react";

import { ConfirmButton, InputField, PopUpButton } from "../UI";
import PopUpHeader from "../PopUpHeader";
import PopUpOverlay from "../PopUpOverlay";

const MarketPopUp = () => {
  return (
    <PopUpOverlay>
      <PopUpHeader title="Buy & Sell" />
      <div className="spacing-vertical">
        <div className="flex-between">
          <div className="text1">Receive (Estimated)</div>
          <div className="text2">Fees: $0.1 USD</div>
        </div>
        <InputField name="BUSD" />
      </div>
      <div>
        <div className="flex-between">
          <PopUpButton className="button-popup buy-button">BUY icp</PopUpButton>
          <PopUpButton className="button-popup sell-button">
            Sell icp
          </PopUpButton>
        </div>
        <ConfirmButton className="linear-background full-width">BUY icp</ConfirmButton>
      </div>
    </PopUpOverlay>
  );
};

export default MarketPopUp;
