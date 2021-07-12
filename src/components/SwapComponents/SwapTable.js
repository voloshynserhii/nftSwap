import React from "react";

import classes from "./swap-components.module.css";

const SwapTable = () => {
  return (
    <div className={classes.tableOverlay}>
      <h2>Order History</h2>
      <div className={classes.tableOverlay}>
        <table id="orderHistory" className={`full-width ${classes.table}`}>
          <tr className={classes.tableRow}>
            <th>No.</th>
            <th>Received</th>
            <th>Paid</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
          <tr className={classes.tableRow}>
            <td>1</td>
            <td>132.5286782 BUSD</td>
            <td>0.2200019 BNB</td>
            <td>BUSD/BNB 0.2200019 </td>
            <td>Success</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default SwapTable;
