import React, { useState } from "react";

import classes from './terms-switcher.module.css';

const TermsSwitcher = (props) => {
  const [term, setTerm] = useState("24h");

  const classTermPassive = `${classes.term} ${classes.termPassive}`;
  const classTermActive = `${classes.term} ${classes.termActive}`;

  return (
        <div className="flex center">
          <span
            className={term === "24h" ? classTermActive : classTermPassive}
            onClick={() => setTerm("24h")}
          >
            {props.term1}
          </span>
          <span
            className={term === "1w" ? classTermActive : classTermPassive}
            onClick={() => setTerm("1w")}
          >
            {props.term2}
          </span>
          <span
            className={term === "1m" ? classTermActive : classTermPassive}
            onClick={() => setTerm("1m")}
          >
            {props.term3}
          </span>
        </div>
  );
};

export default TermsSwitcher;