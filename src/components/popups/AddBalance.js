import PopUp from "./components/PopUp";
import { SelectInput } from "../UI";
import USDCIcon from "../../assets/icons/dollar.svg";
import QRImage from "../../assets/QR.png";
import "./popups.css";

const AddBalance = (props) => {
  return (
    <div className={props.className}>
      <PopUp className="stake-popup center-popup" onClose={props.onClose}>
        <div className="full-width">
          <h2>{props.title}</h2>
          <div className="spacing-vertical">
            <div className="flex">
              <div className="text1">Your Address</div>
            </div>
            <SelectInput icon={USDCIcon} name="USDC" />
          </div>
          <div className="full-width flex-center spacing-vertical2">
            <img className="qr" src={QRImage} alt="qrcode" />
          </div>
          
          <div className="flex-center">
            <div className="text1 align-center">
              If you already have some ICP, the quickest way is to send it to
              your selected Signalz account.
            </div>
          </div>
        </div>
      </PopUp>
    </div>
  );
};

export default AddBalance;
