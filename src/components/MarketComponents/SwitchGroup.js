import { useState } from "react";

import SwitchBlock from "../SwitchBlock";
import SwitchButton from "../SwitchButton";

const SwitchGroup = (props) => {
  const [table, setTable] = useState("orders");

  if (table === "orders") {
    return (
      <SwitchBlock onClick={props.switchHandler(table)}>
        <SwitchButton>Orders</SwitchButton>
        <div className="switch-passive" onClick={() => setTable("graph")}>
          Price Graph
        </div>
        <div className="switch-passive" onClick={() => setTable("book")}>
          Order Book
        </div>
      </SwitchBlock>
    );
  }
  if (table === "graph") {
    return (
      <SwitchBlock onClick={props.switchHandler(table)}>
        <div className="switch-passive" onClick={() => setTable("orders")}>
          Orders
        </div>
        <SwitchButton>Price Graph</SwitchButton>
        <div className="switch-passive" onClick={() => setTable("book")}>
          Order Book
        </div>
      </SwitchBlock>
    );
  }
  if (table === "book") {
    return (
      <SwitchBlock onClick={props.switchHandler(table)}>
        <div className="switch-passive" onClick={() => setTable("orders")}>
          Orders
        </div>
        <div className="switch-passive" onClick={() => setTable("graph")}>
          Price Graph
        </div>
        <SwitchButton>Order Book</SwitchButton>
      </SwitchBlock>
    );
  }
};
export default SwitchGroup;
