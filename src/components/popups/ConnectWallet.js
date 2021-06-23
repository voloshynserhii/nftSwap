import React, { useState, useEffect } from "react";
import {NavLink} from 'react-router-dom';

import PopUp from "./components/PopUp";
import WalletField from "./components/WalletField";
import WALLETS from "./utils";
import "./popups.css";

const ConnectWallet = (props) => {
  return (
    <div className={props.className}>
      <PopUp>
        connect wallet
        <div className="full-width">
        {WALLETS.map((wallet) => (
          <WalletField key={wallet.id} icon={wallet.icon} name={wallet.name} />
        ))}
        </div>
        <NavLink className="link" to="/swap">Learn how to connect your Wallet</NavLink>
      </PopUp>
    </div>
  );
};
export default ConnectWallet;
