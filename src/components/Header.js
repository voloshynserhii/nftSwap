import React from "react";

import { Logo, HeaderButton, User } from "./UI";
import './main.css';

const Header = () => {
  return (
    <header className="flex-between">
      <Logo />
      <div className="header-right flex-between">
        <HeaderButton />
        <User />
      </div>
    </header>
  );
};
export default Header;
