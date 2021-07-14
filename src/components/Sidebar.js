import React from "react";

import { MainMenuButton, SwitchBlock } from "./UI";
import HomeIcon from "../assets/icons/home.svg";
import HomeActive from "../assets/icons/home-active.svg";
import SwapIcon from "../assets/icons/swap.svg";
import SwapActive from "../assets/icons/swap-active.svg";
import PoolIcon from "../assets/icons/pool.svg";
import PoolActive from "../assets/icons/pool-active.svg";
import CreateIcon from "../assets/icons/create.svg";
import CreateActive from "../assets/icons/create-active.svg";
import CalendarIcon from "../assets/icons/calendar.svg";
import CalendarActive from "../assets/icons/calendar-active.svg";
import MarketIcon from "../assets/icons/market.svg";
import MarketActive from "../assets/icons/market-active.svg";
import WithdrawIcon from "../assets/icons/withdraw.svg";
import WithdrawActive from "../assets/icons/withdraw-active.svg";
import DislaimerIcon from "../assets/icons/disclaimer.svg";

import "./main.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="full-width">
        <MainMenuButton image={HomeIcon} imageActive={HomeActive} path="/"/>
        <MainMenuButton image={SwapIcon} imageActive={SwapActive} path="/swap"/>
        <MainMenuButton image={PoolIcon} imageActive={PoolActive} path="/pool"/>
        <MainMenuButton image={CreateIcon} imageActive={CreateActive} path="/create"/>
        <MainMenuButton image={CalendarIcon} imageActive={CalendarActive} path="/calendar"/>
        <MainMenuButton image={WithdrawIcon} imageActive={WithdrawActive} path="/withdraw"/>
        <MainMenuButton image={DislaimerIcon} imageActive={DislaimerIcon} path="/disclaimer"/>
        <MainMenuButton image={MarketIcon} imageActive={MarketActive} path="/market"/>
      </div>
      <div className="full-width flex-center">
        <SwitchBlock />
      </div>
    </div>
  );
};
export default Sidebar;
