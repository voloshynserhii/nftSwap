import React, { useState } from "react";

import { PopUpButton, InputField } from "../../UI";
import { AddBalance, Success, WithdrawPopUp } from "../../popups";
import Controller from "../../../assets/controller.svg";
import classes from "./popouts.module.css";

const Balance = () => {
  const [showBalance, setShowBalance] = useState(false);
  const [showTransfer, setShowTransfer] = useState(false);
  const [success, setSuccess] = useState(false);

  const showBalanceHandler = () => {
    setShowBalance(true);
  };
  const closeHandler = () => {
    setShowBalance(false);
    setShowTransfer(false);
    setSuccess(false);
  };

  const transferHandler = () => {
    setShowTransfer(true);
  };

  const stakeHandler = () => {
    setShowBalance(true);
  };

  const successHandler = () => {
    setSuccess(true);
  };

  return (
    <>
      {showBalance && <AddBalance title="Add Balance" onClose={closeHandler} />}
      {showTransfer && (
        <WithdrawPopUp
          title="Withdraw"
          onConfirm={successHandler}
          onClose={closeHandler}
        />
      )}
      {success && (
        <Success title="100 Withdrawn Succesfully" onClose={closeHandler}>
          90,000,000 ICPX sent to your address.
        </Success>
      )}
      <div className={classes.overlay}>
        <div className={`flex-between ${classes.header}`}>
          <div className="full-width">
            <div className={classes.greyText}>Balance</div>
            <div className="title">450 ICP</div>
          </div>
          <PopUpButton
            className={`button-popup buy-button ${classes.addButton}`}
            onClick={showBalanceHandler}
          >
            Add Balance
          </PopUpButton>
        </div>
        <div className="flex-between">
          <h4>Select Amount</h4>
          <InputField className={classes.inputs}>$30</InputField>
        </div>
        <img className="full-width" src={Controller} alt="Controller" />
        <div className="flex-between">
          <h4>Select Time</h4>
          <InputField className={classes.inputs}>1 Year</InputField>
        </div>
        <img className="full-width" src={Controller} alt="Controller" />
        <div className={classes.bottom}>
          <div className={`flex-between full-height ${classes.bottomWrapper}`}>
            <div className="input-text">Yield 12% . Yield Amount = $38</div>
            <div className="flex-between">
              <PopUpButton
                className={`button-popup buy-button ${classes.addButton}`}
                onClick={transferHandler}
              >
                Transfer
              </PopUpButton>
              <PopUpButton
                className={`button-popup switch-active text-white ${classes.addButton}`}
                onClick={stakeHandler}
              >
                Stake
              </PopUpButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Balance;
