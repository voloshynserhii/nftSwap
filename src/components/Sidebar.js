import React from "react";

import { MainMenuButton, SwitchBlock } from "./UI";
import HomeIcon from "../assets/icons/home.svg";
import SwapIcon from "../assets/icons/swap.svg";
import PoolIcon from "../assets/icons/pool.svg";
import CreateIcon from "../assets/icons/create.svg";
import CalendarIcon from "../assets/icons/calendar.svg";
import WithdrawIcon from "../assets/icons/withdraw.svg";
import DislaimerIcon from "../assets/icons/disclaimer.svg";

import "./main.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="full-width">
        <MainMenuButton image={HomeIcon} path="/"/>
        <MainMenuButton image={SwapIcon} path="/swap"/>
        <MainMenuButton image={PoolIcon} path="/pool"/>
        <MainMenuButton image={CreateIcon} path="/create"/>
        <MainMenuButton image={CalendarIcon} path="/calendar"/>
        <MainMenuButton image={WithdrawIcon} path="/withdraw"/>
        <MainMenuButton image={DislaimerIcon} path="/disclaimer"/>
      </div>
      <div className="full-width flex-center">
        <SwitchBlock />
      </div>
    </div>
  );
};
export default Sidebar;
