import React, { useState } from "react";

import { Logo, HeaderButton, User } from "./UI";
// import ConnectWallet from "./popups/ConnectWallet";
import {StartDepositPopUp, StartAccountPopUp, SignInPopUp} from './popups';

import "./main.css";

const Header = () => {
  const [wallet, setWallet] = useState(false);
  const [account, setAccount] = useState(false);

  const showWalletHandler = () => {
    setWallet((prev) => !prev);
    if(account) {
      setAccount(false);
    }
  };
  
  const showUserHandler = () => {
    setAccount((prev) => !prev);
    if(wallet) {
      setWallet(false);
    }
  };

  return (
    <header className="flex-between">
      <Logo path="/" />
      <div className="flex-between">
        <HeaderButton showWallet={showWalletHandler} />
        <User showUser={showUserHandler}/>
      </div>
      {/* {account && <SignInPopUp className="header-popup"/>} */}
      {account && <StartAccountPopUp className="header-popup"/>}
      {wallet && <StartDepositPopUp className="header-popup"/>}
    </header>
  );
};
export default Header;
