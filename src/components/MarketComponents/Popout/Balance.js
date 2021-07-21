import React from "react";

import {PopUpButton, InputField} from "../../UI";
import Controller from "../../../assets/controller.svg";
import classes from "./popouts.module.css";

const Balance = () => {

  return (
    <div className={`full-width ${classes.overlay}`}>
        <div className={`flex-between ${classes.header}`}>
            <div className="full-width">
                <div className={classes.greyText}>Balance</div>
                <div className="title">450 ICP</div>
            </div>
            <PopUpButton className={`button-popup buy-button ${classes.addButton}`}>Add Balance</PopUpButton>
        </div>
        <div className="flex-between">
            <h4>Select Amount</h4>
            <InputField>$30</InputField>
        </div>
        <img className="full-width" src={Controller} alt="Controller" />
        <div className="flex-between">
            <h4>Select Time</h4>
            <InputField>1 Year</InputField>
        </div>
        <img className="full-width" src={Controller} alt="Controller" />
        <div className={classes.bottom}>
            vsdv
        </div>
    </div>
  );
};

export default Balance;