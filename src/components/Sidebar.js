import React from "react";

import { LogoName, MainMenuButton } from "./UI";
import HomeIcon from "../assets/icons/home.svg";
import SwapIcon from "../assets/icons/swap.svg";
import PoolIcon from "../assets/icons/pool.svg";
import CreateIcon from "../assets/icons/create.svg";
import CalendarIcon from "../assets/icons/calendar.svg";
import WithdrawIcon from "../assets/icons/withdraw.svg";
import DislaimerIcon from "../assets/icons/disclaimer.svg";
import SwitchBlock from "./SwitchBlock";

import "./main.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div>
        <MainMenuButton image={HomeIcon} path="/">
          HOME
        </MainMenuButton>
        <MainMenuButton image={SwapIcon} path="/swap">
          SWAP
        </MainMenuButton>
        <MainMenuButton image={PoolIcon} path="/pool">
          POOL
        </MainMenuButton>
        <MainMenuButton image={CreateIcon} path="/create">
          CREATE
        </MainMenuButton>
        <MainMenuButton image={CalendarIcon} path="/calendar">
          CALENDAR
        </MainMenuButton>
        <MainMenuButton image={WithdrawIcon} path="/withdraw">
          WITHDRAW
        </MainMenuButton>
        <MainMenuButton image={DislaimerIcon} path="/disclaimer">
          DISCLAIMER
        </MainMenuButton>
      </div>
      <div>
        <SwitchBlock />
        <LogoName path="/" />
      </div>
    </div>
  );
};
export default Sidebar;
