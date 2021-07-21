import { useState } from "react";

import SwitchBlock from "../../SwitchBlock";
import SwitchButton from "../../SwitchButton";
import Balance from "./Balance";
import StakedCoins from "./StakedCoins";

const PopoutSwitchGroup = (props) => {
  const [table, setTable] = useState("balance");

  if (table === "balance") {
    return (
      <div className="flex-column full-width">
        <SwitchBlock
          className="full-width fit-height"
        >
          <SwitchButton>Balance</SwitchButton>
          <div className="switch-passive" onClick={() => setTable("stake")}>
            Balance on Staking
          </div>
        </SwitchBlock>
        <Balance />
      </div>
    );
  }
  if (table === "stake") {
    return (
      <div className="flex-column full-width">
        <SwitchBlock
          className="full-width fit-height"
        >
          <div className="switch-passive" onClick={() => setTable("balance")}>
            Balance
          </div>
          <SwitchButton>Balance on Staking</SwitchButton>
        </SwitchBlock>
        <StakedCoins />
      </div>
    );
  }
};
export default PopoutSwitchGroup;
