import React, { useState, useEffect } from "react";

import DataRow from "./DataRow";
import classes from "./table.module.css";

const data = [
  {
    id: "01",
    amount: 50,
    rewards: 1,
    rate: 2,
    timeLeft: 2,
  },
  {
    id: "02",
    amount: 32,
    rewards: 1,
    rate: 2,
    timeLeft: 1,
  },
  {
    id: "03",
    amount: 60,
    rewards: 1,
    rate: 2,
    timeLeft: 1,
  },
  {
    id: "04",
    amount: 45,
    rewards: 1,
    rate: 2,
    timeLeft: 3,
  },
  {
    id: "05",
    amount: 78,
    rewards: 1,
    rate: 2,
    timeLeft: 2,
  },
];

const Table = () => {
  const [row, setRow] = useState(data);

  return (
    <div className={classes.table}>
      {row.map((item) => (
        <DataRow
          key={item.id}
          amount={item.amount}
          rewards={item.rewards}
          rate={item.rate}
          timeLeft={item.timeLeft}
        />
      ))}
    </div>
  );
};

export default Table;
