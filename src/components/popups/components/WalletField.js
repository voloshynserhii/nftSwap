import React from "react";

import "./popup-components.css";

const WalletField = (props) => {
  return (
    <div className={`wallet-field flex-between ${props.className}`}>
      {props.name}
      <div className="wallet-icon flex-center">
        <img src={props.icon} alt={props.children} />
      </div>
    </div>
  );
};
export default WalletField;
