import React, { useState } from "react";

import { Hamburger, HeaderButton, Logo, Notification, User } from "./UI";
import ConnectWallet from "./popups/ConnectWallet";
// import {StartDepositPopUp, StartAccountPopUp, SignInPopUp} from './popups';

import "./main.css";

const Header = () => {
  const [wallet, setWallet] = useState(false);
  const [account, setAccount] = useState(false);

  const showWalletHandler = () => {
    setWallet((prev) => !prev);
    if (account) {
      setAccount(false);
    }
  };

  const showUserHandler = () => {
    setAccount((prev) => !prev);
    if (wallet) {
      setWallet(false);
    }
  };
  const onOpenMenuHandler = () => {
  };

  const onOpenNotificationHandler = () => {
  };
  
  return (
    <>
      <header className="flex-between">
        <div className="flex-between full-height">
          <Hamburger openMenu={onOpenMenuHandler}/>
          <Logo className="full-height flex-center" path="/" />
        </div>
        <div className="flex-between">
          <Notification onOpenNotification={onOpenNotificationHandler}/>
          <HeaderButton showWallet={showWalletHandler} />
          <User showUser={showUserHandler} />
        </div>
        {wallet && <ConnectWallet className="header-popup" />}
        {/* {account && <StartAccountPopUp className="header-popup"/>}
      {wallet && <StartDepositPopUp className="header-popup"/>} */}
      </header>
      <hr className="header-border-bottom" />
    </>
  );
};
export default Header;
