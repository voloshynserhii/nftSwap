import React from "react";

import TermsSwitcher from "../TermsSwitcher";
import TableHeader from "../TableHeader";
import USDCIcon from "../../assets/icons/dollar.svg";
import BUSDIcon from "../../assets/icons/BUSD.svg";

const SwapTableHeader = () => {
  return (
    <TableHeader
      dynamic="+227.54"
      icon1={USDCIcon}
      icon1Name="USDC"
      icon2={BUSDIcon}
      icon2Name="BUSD"
      swap="-8.72 %"
      title="1.005"
    >
      <TermsSwitcher term1="24H" term2="1W" term3="1M" />
    </TableHeader>
  );
};

export default SwapTableHeader;
