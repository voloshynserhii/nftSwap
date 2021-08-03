import PopUp from "./components/PopUp";
import { ConfirmButton, SelectInput } from "../UI";
import USDCIcon from "../../assets/icons/dollar.svg";
import BUSDIcon from "../../assets/icons/BUSD.svg";
import ArrowDownIcon from "../../assets/icons/arrow-down.svg";
import "./popups.css";

const WithdrawPopUp = (props) => {
  return (
    <div className={props.className}>
      <PopUp className="stake-popup center-popup" onClose={props.onClose}>
        <div className="full-width">
          <h2>{props.title}</h2>
          <div className="spacing-vertical2">
            <div className="flex-between">
              <div className="text1">Select Coin</div>
              <div className="text2">Available: 500</div>
            </div>
            <SelectInput icon={USDCIcon} name="USDC" />
          </div>
          <div className="spacing-vertical2">
            <div className="flex">
              <div className="text1">Withdraw To</div>
            </div>
            <SelectInput icon={BUSDIcon} name="BUSD" />
          </div>
          <div className="flex-center">
            <div className="text1">Network fee: 0.0000046 ~ 0.00057 BTC</div>
          </div>
          <ConfirmButton
            className="full-width gray-background spacing-vertical"
            onConfirm={props.onConfirm}
          >
            Withdraw
          </ConfirmButton>
        </div>
      </PopUp>
    </div>
  );
};

export default WithdrawPopUp;
