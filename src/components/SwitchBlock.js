import React, { useState } from "react";

import { SwitchMode } from "./UI";
import DayIcon from "../assets/icons/dayMode.svg";
import DayIconActive from "../assets/icons/dayMode-active.svg";
import NightIcon from "../assets/icons/nightMode.svg";
import NightIconActive from "../assets/icons/nightMode-active.svg";

const SwitchBlock = () => {
  const [mode, setMode] = useState(false);

  const onSwitchModeHandler = () => {
      setMode((prev) => !prev);
  };
  const night = mode ? NightIcon : NightIconActive;
  const day = !mode ? DayIcon : DayIconActive;
  return (
    <div className="switch-block">
      <SwitchMode image={night} onSwitchMode={onSwitchModeHandler} />
      <SwitchMode image={day} onSwitchMode={onSwitchModeHandler} />
    </div>
  );
};
export default SwitchBlock;
