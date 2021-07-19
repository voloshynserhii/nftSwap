import React from "react";

import TermsSwitcher from "../../TermsSwitcher";

const ChartPage = (props) => {
  return (
    <div className="flex-between">
      <h1>{props.title}</h1>
      <TermsSwitcher term1="24 Hours" term2="1 Week" term3="1 Month" />
    </div>
  );
};

export default ChartPage;
