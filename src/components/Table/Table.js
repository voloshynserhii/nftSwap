import React from "react";

import classes from "./table.module.css";

const Table = (props) => {
  return (
    <div className={classes.tableOverlay}>
      <table id="orderHistory" className={`full-width ${classes.table}`}>
        <thead>
          <tr className={classes.tableRow}>
            {props.headers && props.headers.map((header) => <th>{header}</th>)}
          </tr>
        </thead>
        <tbody>{props.children}</tbody>
      </table>
    </div>
  );
};

export default Table;
