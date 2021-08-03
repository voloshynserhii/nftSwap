import PopUp from "./components/PopUp";
import { InputField } from "../UI";
import QRImage from "../../assets/QR.png";
import LinkIcon from "../../assets/icons/Link.svg";
import CopyIcon from "../../assets/icons/Copy.svg";
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
            <InputField>
              <div className="flex center input-code">
                <span className="input-text">5DHKF7GH45812Q556...</span>
              </div>
              <div className="flex-between">
                <img className="full-width full-height" src={LinkIcon} alt="link" />
                <img className="spacing-horizontal full-height full-width" src={CopyIcon} alt="copy" />
              </div>
            </InputField>
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
