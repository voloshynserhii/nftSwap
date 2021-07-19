import React from "react";

import TableHeader from "../../TableHeader";
import TermsSwitcher from "../../TermsSwitcher";
import Table from "../../Table";
import USDCIcon from "../../../assets/icons/dollar.svg";
import BUSDIcon from "../../../assets/icons/BUSD.svg";
import tableClasses from "../../Table/table.module.css";

const headers = [
  "Amount (ICP)",
  "Price (BUSD)",
  "Price (BUSD)",
  "Amount (ICP)",
];
const data = [
  {
    ammount1: 64.55,
    price1: 48.995,
    price2: 48.996,
    ammount2: 83.856,
  },
  {
    ammount1: 64.55,
    price1: 48.995,
    price2: 48.996,
    ammount2: 83.856,
  },
];

const OrdersPage = () => {
  return (
    <>
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
      <Table headers={headers}>
        {data.map((item) => (
          <tr className={tableClasses.tableRow}>
            <td style={{color: "#16214D"}}>{item.ammount1}</td>
            <td style={{color: "#0EC9B5", backgroundColor: "rgba(14, 201, 181, 0.2)"}}>{item.price1}</td>
            <td style={{color: "#FF2A57", backgroundColor: "rgba(255, 42, 87, 0.16)"}}>{item.price2}</td>
            <td style={{color: "#16214D"}}>{item.ammount2}</td>
          </tr>
        ))}
      </Table>
    </>
  );
};

export default OrdersPage;
