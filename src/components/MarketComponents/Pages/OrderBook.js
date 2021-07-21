import React from "react";

import Table from "../../Table";
import TableHeader from "../../TableHeader";
import TermsSwitcher from "../../TermsSwitcher";
import USDCIcon from "../../../assets/icons/dollar.svg";
import BUSDIcon from "../../../assets/icons/BUSD.svg";
import tableClasses from "../../Table/table.module.css";

const headers = ["Price (BUSD)", "Amount (ICP)", "Time"];
const data = [
  {
    price: 48.996,
    ammount: 28,
    time: "12:05:04",
  },
  {
    price: -48.996,
    ammount: 28,
    time: "12:05:04",
  },
];

const OrderBookPage = (props) => {
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
          <tr key={item.price} className={tableClasses.tableRow}>
            {item.price > 0 ? (
              <td style={{ color: "#0EC9B5" }}>{item.price}</td>
            ) : (
              <td style={{ color: "#FF2A57" }}>{item.price}</td>
            )}
            <td>{item.ammount}</td>
            <td style={{ color: "#8A9AB9" }}>{item.time}</td>
          </tr>
        ))}
      </Table>
    </>
  );
};

export default OrderBookPage;
