import { useState } from "react";

import SwitchBlock from "../SwitchBlock";
import SwitchButton from "../SwitchButton";

const SwitchGroup = (props) => {
  const [orders, setOrders] = useState(true);
  const [graph, setGraph] = useState(false);
  const [book, setBook] = useState(false);

  const onOrdersHandler = () => {
    setOrders(true);
    setGraph(false);
    setBook(false);
  };
  const onGraphHandler = () => {
    setOrders(false);
    setGraph(true);
    setBook(false);
  };
  const onBookHandler = () => {
    setOrders(false);
    setGraph(false);
    setBook(true);
  };
  if (orders) {
    return (
      <SwitchBlock onClick={props.switchHandler}>
        <SwitchButton>Orders</SwitchButton>
        <div className="switch-passive" onClick={onBookHandler}>Order Book</div>
        <div className="switch-passive" onClick={onGraphHandler}>Price Graph</div>
      </SwitchBlock>
    );
  }
  if (graph) {
    return (
      <SwitchBlock onClick={props.switchHandler}>
        <div className="switch-passive" onClick={onOrdersHandler}>Orders</div>
        <div className="switch-passive" onClick={onBookHandler}>Order Book</div>
        <SwitchButton>Price Graph</SwitchButton>
      </SwitchBlock>
    );
  }
  if (book) {
    return (
      <SwitchBlock onClick={props.switchHandler}>
        <div className="switch-passive" onClick={onOrdersHandler}>Orders</div>
        <SwitchButton>Order Book</SwitchButton>
        <div className="switch-passive" onClick={onGraphHandler}>Price Graph</div>
      </SwitchBlock>
    );
  }
};
export default SwitchGroup;
