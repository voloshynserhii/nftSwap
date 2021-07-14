import React from "react";

// import { ConfirmButton, InputField, SettingsButton, WalletButton } from "../UI";
import PopUpHeader from "../SwapComponents/PopUpHeader";
import PopUpOverlay from "../SwapComponents/PopUpOverlay";

const MarketPopUp = () => {
  return (
    <PopUpOverlay>
      <PopUpHeader title="Buy & Sell" />
    </PopUpOverlay>
  );
};

export default MarketPopUp;
