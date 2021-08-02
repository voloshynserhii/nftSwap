import PopUp from "./components/PopUp";
import PopUpHeader from "../PopUpHeader";
import { ConfirmButton, SelectInput } from "../UI";
import USDCIcon from "../../assets/icons/dollar.svg";
import BUSDIcon from "../../assets/icons/BUSD.svg";
import ArrowDownIcon from "../../assets/icons/arrow-down.svg";
import "./popups.css";

const StakePopUp = (props) => {
  return (
    <div className={props.className}>
      <PopUp className="stake-popup center-popup" onClose={props.onClose}>
        <div className="full-width">
          <PopUpHeader title="Unstake"/>
          <div className="spacing-vertical">
            <div className="flex">
              <div className="text1">Pay</div>
            </div>
            <SelectInput icon={USDCIcon} name="USDC" />
          </div>
          <div className="flex-center">
            <img src={ArrowDownIcon} alt="Arrow" />
          </div>
          <div className="spacing-vertical">
            <div className="flex">
              <div className="text1">Receive (Estimated)</div>
            </div>
            <SelectInput icon={BUSDIcon} name="BUSD" />
          </div>
          <div className="flex-center">
            <div className="text1">1 USDC = 1.0005 USDC</div>
          </div>
          <ConfirmButton className="full-width gray-background spacing-vertical" onConfirm={props.onConfirm}>
            Confirm Order
          </ConfirmButton>
          <div className="flex-center">
            <div className="text1">
              Enter amount to see more trading details
            </div>
          </div>
        </div>
      </PopUp>
    </div>
  );
};

export default StakePopUp;
