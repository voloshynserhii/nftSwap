import React from "react";

import PopoutSwitchGroup from "./PopoutSwitchGroup";

const MarketPopout = () => {

  return (
    <div className={`pages-overlay flex full-width`}>
      <PopoutSwitchGroup />
    </div>
  );
};

export default MarketPopout;