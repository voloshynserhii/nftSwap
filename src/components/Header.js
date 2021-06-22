import React, { useState } from "react";

import { Logo, HeaderButton, User } from "./UI";
import ConnectWallet from "./popups/ConnectWallet";
import Account from "./popups/Account";
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
      <Logo />
      <div className="flex-between">
        <HeaderButton showWallet={showWalletHandler} />
        <User showUser={showUserHandler}/>
      </div>
      {wallet && <ConnectWallet className="header-popup"/>}
      {account && <Account className="header-popup"/>}
    </header>
  );
};
export default Header;
