import React from "react";
import {NavLink} from 'react-router-dom';

import "./popup-components.css";

const TermsAgreeField = (props) => {
  return (
    <div className="terms-field full-width flex-between">
      <label htmlFor="terms">
        <input id="terms" type="checkbox" />
        <span>{props.text}<NavLink className="link-blue" to="/swap">{props.link}</NavLink></span>
      </label>
    </div>
  );
};
export default TermsAgreeField;
