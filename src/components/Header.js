import React, { useState } from "react";

import { Logo, HeaderButton, User } from "./UI";
import ConnectWallet from "./popups/ConnectWallet";
import "./main.css";

const Header = () => {
  const [wallet, setWallet] = useState(false);

  const showWalletHandler = () => {
    setWallet((prev) => !prev);
  };

  return (
    <header className="flex-between">
      <Logo />
      <div className="flex-between">
        <HeaderButton showWallet={showWalletHandler} />
        <User />
      </div>
      {wallet && <ConnectWallet className="wallet"/>}
    </header>
  );
};
export default Header;
