import React from "react";
import { useHistory } from "react-router-dom";

import {
  PopUpLayer,
  PopUpInput,
  PopUpConfirmButton,
  PopUpLink,
} from "./components";
import { MetaMaskLogo } from "./../UI";
import "./popups.css";

const SignInPopUp = (props) => {
  const history = useHistory();
  
  const restoreHandler = () => {
    history.replace("/");
  }
  const importHandler = () => {
    history.replace("/");
  }
  
  const submitHandler = () => {console.log("Confirm")};
  return (
    <div className={props.className}>
      <PopUpLayer>
        <div className="flex-column full-width full-height signin-layer">
          <MetaMaskLogo />
          <h4>Welcome back</h4>
          <p>The decentralized web awaits</p>
          <form action="#" className="full-width popup-form" onSubmit={submitHandler}>
            <PopUpInput
              className="full-width"
              type="text"
              placeholder="Password"
            />
            <PopUpConfirmButton className="full-width">
              Sign in to MetaMask
            </PopUpConfirmButton>
          </form>
          <PopUpLink className="full-width" onClick={restoreHandler}>Restore account?</PopUpLink>
          <PopUpLink className="full-width" onClick={importHandler}>
            Import from your seed phrase
          </PopUpLink>
        </div>
      </PopUpLayer>
    </div>
  );
};
export default SignInPopUp;
