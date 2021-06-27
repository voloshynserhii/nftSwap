// import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import PopUp from "./components/PopUp";
import TermsAgreeField from "./components/TermsAgreeField";
import WalletField from "./components/WalletField";
import CloseIcon from "../../assets/icons/close.svg";
import WALLETS from "./utils";
import "./popups.css";

const ConnectWallet = (props) => {
  return (
    <div className={props.className}>
      <PopUp>
        <div className="popup-header full-width flex-between">
          <span>SELECT WALLET</span>
          <span onClick={props.onClose}>
            <img src={CloseIcon} alt="close" />
          </span>
        </div>
        <TermsAgreeField text="I have read, understand, and agree to The " link="Terms of Service."/>
        <div className="full-width">
          {WALLETS.map((wallet) => (
            <WalletField
              key={wallet.id}
              icon={wallet.icon}
              name={wallet.name}
            />
          ))}
        </div>
        <NavLink className="link" to="/swap">
          Learn how to connect your Wallet
        </NavLink>
      </PopUp>
    </div>
  );
};
export default ConnectWallet;
