import React, { useState } from "react";

import { SwitchMode } from "./UI";
import DayIcon from "../assets/icons/day-mode.svg";
import DayIconActive from "../assets/icons/dayMode-active.svg";
import NightIcon from "../assets/icons/night-mode.svg";
import NightIconActive from "../assets/icons/nightMode-active.svg";

const SwitchBlock = () => {
  const [mode, setMode] = useState(false);

  const onSwitchModeHandler = () => {
      setMode((prev) => !prev);
  };
  const night = mode ? NightIcon : NightIconActive;
  const day = !mode ? DayIcon : DayIconActive;
  return (
    <div className="switch-block full-width flex-column">
      <SwitchMode className="border-top-round" image={day} onSwitchMode={onSwitchModeHandler} />
      <SwitchMode className="border-bottom-round" image={night} onSwitchMode={onSwitchModeHandler} />
    </div>
  );
};
export default SwitchBlock;
