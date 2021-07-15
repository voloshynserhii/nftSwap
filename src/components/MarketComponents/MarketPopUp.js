import React from "react";

// import { ConfirmButton, InputField, SettingsButton, WalletButton } from "../UI";
import PopUpHeader from "../PopUpHeader";
import PopUpOverlay from "../PopUpOverlay";

const MarketPopUp = () => {
  return (
    <PopUpOverlay>
      <PopUpHeader title="Buy & Sell" />
    </PopUpOverlay>
  );
};

export default MarketPopUp;
