import React from "react";

import { ConfirmButton, InputField, SettingsButton, WalletButton } from "../UI";
import PopUpHeader from "../PopUpHeader";
import PopUpOverlay from "../PopUpOverlay";

const MarketPopUp = () => {
  return (
    <PopUpOverlay>
      <PopUpHeader title="Buy & Sell" />
      <ConfirmButton className="linear-background">BUY icp</ConfirmButton>
    </PopUpOverlay>
  );
};

export default MarketPopUp;
