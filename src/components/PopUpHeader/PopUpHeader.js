import React from "react";

import { SettingsButton, WalletButton } from "../UI";

const PopUpHeader = (props) => {
  return (
    <div className={`flex-between ${props.className}`}>
      <h1>{props.title}</h1>
      <div className="flex">
        <WalletButton />
        <SettingsButton />
      </div>
    </div>
  );
};

export default PopUpHeader;
