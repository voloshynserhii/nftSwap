import React from "react";

import "./popup-components.css";

const WalletField = (props) => {
  return (
    <div className={`wallet-field flex center ${props.className}`}>
      <div className="wallet-icon flex-center">
        <img src={props.icon} alt={props.children} />
      </div>
      {props.name}
    </div>
  );
};
export default WalletField;
